#!/usr/bin/env python3
"""Fetch the latest Arsenal news and write the newest items to data/arsenal.json.

Sources are listed in scripts/arsenal_sources.json: press and fan-site RSS
feeds, plus Google News searches that follow individual Arsenal reporters
wherever they publish. Items are merged, de-duplicated, capped per source so
no single outlet dominates, and the newest `max_items` are kept. Each item's
image comes from its feed, or from the article's og:image tag as a fallback.
Standard library only, so it runs on a bare GitHub Actions runner.

Usage:
  python scripts/fetch_arsenal.py            # write data/arsenal.json
  python scripts/fetch_arsenal.py --check    # report per-source counts, write nothing
  python scripts/fetch_arsenal.py OUT.json   # write somewhere else
"""
import html
import json
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "scripts" / "arsenal_sources.json"
OUTPUT = ROOT / "data" / "arsenal.json"
USER_AGENT = "Mozilla/5.0 (compatible; becow5x5-arsenal-bot/1.0; +https://becow5x5.github.io)"
MEDIA_NS = "{http://search.yahoo.com/mrss/}"
GOOGLE_NEWS = "https://news.google.com/rss/search?q={q}&hl=en-GB&gl=GB&ceid=GB:en"


def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def clean_text(raw, limit=220):
    text = html.unescape(re.sub(r"<[^>]+>", " ", raw or ""))
    text = re.sub(r"\s+", " ", text).strip()
    return text if len(text) <= limit else text[: limit - 1].rsplit(" ", 1)[0] + "…"


def parse_date(raw):
    try:
        dt = parsedate_to_datetime(raw)
    except (TypeError, ValueError):
        return None
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)


def feed_image(item):
    """Largest media:content / media:thumbnail / enclosure image in an RSS item."""
    best, best_w = None, -1
    for tag in (MEDIA_NS + "content", MEDIA_NS + "thumbnail"):
        for el in item.iter(tag):
            url = el.get("url")
            if not url or el.get("medium") not in (None, "image"):
                continue
            width = int(el.get("width") or 0)
            if width > best_w:
                best, best_w = url, width
    if best:
        return best
    enc = item.find("enclosure")
    if enc is not None and (enc.get("type") or "").startswith("image/"):
        return enc.get("url")
    return None


OG_IMAGE = re.compile(
    r'<meta[^>]+(?:property|name)=["\'](?:og:image|twitter:image)["\'][^>]*>', re.I)
CONTENT_ATTR = re.compile(r'content=["\']([^"\']+)["\']', re.I)


def page_image(url):
    """Fallback: the og:image of the article page."""
    try:
        page = fetch(url, timeout=15).decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001 - a missing image is not fatal
        print(f"  ! og:image lookup failed for {url}: {exc}", file=sys.stderr)
        return None
    for tag in OG_IMAGE.findall(page):
        m = CONTENT_ATTR.search(tag)
        if m:
            return html.unescape(m.group(1))
    return None


def parse_feed(src, xml_bytes):
    root = ET.fromstring(xml_bytes)
    is_gnews = "google_news" in src
    items = []
    for item in root.iter("item"):
        title = clean_text(item.findtext("title"), limit=300)
        link = (item.findtext("link") or "").strip()
        published = parse_date(item.findtext("pubDate"))
        if not title or not link:
            continue
        if is_gnews:
            # Google News titles read "Headline - Publisher"; the publisher is also in <source>.
            publisher = (item.findtext("source") or "").strip()
            if publisher and title.endswith(" - " + publisher):
                title = title[: -len(publisher) - 3]
            summary = ""  # Google's description only repeats the headline
        else:
            publisher = src["name"]
            summary = clean_text(item.findtext("description"))
        items.append({
            "title": title,
            "url": link,
            "image": feed_image(item),
            "summary": summary,
            "source": publisher or src["name"],
            "category": src["category"],
            "reporter": src["name"] if src["category"] == "reporter" else None,
            "published": published.isoformat() if published else None,
            "_src": src["name"],
        })
    return items


def source_url(src):
    if "rss" in src:
        return src["rss"]
    return GOOGLE_NEWS.format(q=urllib.parse.quote(src["google_news"] + " when:7d"))


def title_key(title):
    return re.sub(r"[^a-z0-9]", "", title.lower())


def gather(config):
    items = []
    for src in config["sources"]:
        try:
            got = parse_feed(src, fetch(source_url(src)))
            print(f"{src['name']:<18} {len(got):>3} items")
            items.extend(got)
        except Exception as exc:  # noqa: BLE001 - one broken source should not stop the rest
            print(f"{src['name']:<18}   ! {exc}", file=sys.stderr)
    return items


def dedupe(items):
    """Drop repeated stories. A direct-feed copy wins over a Google News copy,
    since it carries an image and a summary."""
    items = sorted(items, key=lambda it: "news.google.com" in it["url"])
    seen_urls, seen_titles, unique = set(), set(), []
    for it in items:
        url_key = it["url"].split("?")[0].rstrip("/")
        tkey = title_key(it["title"])
        if url_key in seen_urls or tkey in seen_titles:
            continue
        seen_urls.add(url_key)
        seen_titles.add(tkey)
        unique.append(it)
    return unique


def select(items, max_items, max_per_source):
    """Newest first, at most max_per_source items from any one source. If that
    leaves slots empty (few sources answered), fill them with the next newest."""
    items = sorted(dedupe(items), key=lambda it: it["published"] or "", reverse=True)
    per_source, picked, overflow = {}, [], []
    for it in items:
        if per_source.get(it["_src"], 0) < max_per_source:
            per_source[it["_src"]] = per_source.get(it["_src"], 0) + 1
            picked.append(it)
        else:
            overflow.append(it)
    picked = picked[:max_items]
    picked += overflow[: max_items - len(picked)]
    return sorted(picked, key=lambda it: it["published"] or "", reverse=True)


def main(argv):
    config = json.loads(CONFIG.read_text(encoding="utf-8"))
    items = gather(config)
    if "--check" in argv:
        return 0 if items else 1

    picked = select(items, config.get("max_items", 10), config.get("max_per_source", 2))
    if not picked:
        # Keep yesterday's file rather than publishing an empty page.
        print("No items fetched from any source; leaving existing data untouched.", file=sys.stderr)
        return 1

    for it in picked:
        # Google News links are redirects, so there is no og:image to read.
        if not it["image"] and "news.google.com" not in it["url"]:
            it["image"] = page_image(it["url"])
        del it["_src"]

    out = Path(argv[0]) if argv else OUTPUT
    out.parent.mkdir(parents=True, exist_ok=True)
    data = {
        "updated": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "items": picked,
    }
    out.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(picked)} items to {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
