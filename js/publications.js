// Renders the Publications section from data/publications.json.
// To add a paper, edit that JSON file only; nothing here needs to change.
(function () {
  const root = document.getElementById('pub-list');
  if (!root) return;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function author(name, me) {
    const equal = name.endsWith('*');
    const clean = equal ? name.slice(0, -1) : name;
    const html = clean === me ? `<span class="me">${esc(clean)}</span>` : esc(clean);
    return equal ? `${html}<sup>*</sup>` : html;
  }

  function pubTemplate(p, me) {
    const img = p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : '';
    const links = (p.links || []).map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join('');
    return `
      <div class="pub">
        ${img}
        <div>
          <p class="title">${esc(p.title)}</p>
          <p class="authors">${p.authors.map(a => author(a, me)).join(', ')}</p>
          <p class="venue">${esc(p.venue)}</p>
          ${links ? `<p class="plinks">${links}</p>` : ''}
        </div>
      </div>`;
  }

  fetch('data/publications.json')
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(data => {
      root.innerHTML = data.publications.map(p => pubTemplate(p, data.me)).join('');
      if (data.under_review) {
        root.insertAdjacentHTML('beforeend',
          `<p class="sub" style="margin-top:14px">Under review: ${esc(data.under_review)}</p>`);
      }
    })
    .catch(() => {
      root.innerHTML = '<p class="sub">Could not load publications. See <a href="https://scholar.google.com/citations?user=sRtXNC8AAAAJ&hl">Google Scholar</a>.</p>';
    });
})();
