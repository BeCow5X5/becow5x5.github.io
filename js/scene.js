// Background scenery for the home page: hills, barn, walking cows and the
// occasional UFO abduction. Include css/scene.css and an empty
// <div class="scene" aria-hidden="true"></div>, then load this script.
(function () {
  const scene = document.querySelector('.scene');
  if (!scene) return;

  scene.innerHTML = `
  <div class="sun"></div>
  <div class="cloud"></div>
  <div class="cloud c2"></div>
  <div class="birds">
    <div class="bird" style="--by:11vh; --bw:22px; --bt:48s; --bd:-5s; --bsx:20vw"><svg viewBox="0 0 24 10"><path d="M1,8 Q6,1 12,7 Q18,1 23,8" fill="none" stroke="#3a3f36" stroke-width="1.6" stroke-linecap="round"/></svg></div>
    <div class="bird" style="--by:13vh; --bw:16px; --bt:52s; --bd:-7s; --bsx:24vw"><svg viewBox="0 0 24 10"><path d="M1,8 Q6,1 12,7 Q18,1 23,8" fill="none" stroke="#3a3f36" stroke-width="1.6" stroke-linecap="round"/></svg></div>
    <div class="bird" style="--by:9vh;  --bw:14px; --bt:55s; --bd:-9s; --bsx:28vw"><svg viewBox="0 0 24 10"><path d="M1,8 Q6,1 12,7 Q18,1 23,8" fill="none" stroke="#3a3f36" stroke-width="1.6" stroke-linecap="round"/></svg></div>
    <div class="bird" style="--by:20vh; --bw:18px; --bt:70s; --bd:-40s; --bsx:70vw"><svg viewBox="0 0 24 10"><path d="M1,8 Q6,1 12,7 Q18,1 23,8" fill="none" stroke="#3a3f36" stroke-width="1.6" stroke-linecap="round"/></svg></div>
  </div>
  <svg class="hills far" viewBox="0 0 1440 400" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--hill-far)"/><stop offset="1" stop-color="#a8c37e"/></linearGradient>
      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--hill-mid)"/><stop offset="1" stop-color="#7fa65a"/></linearGradient>
      <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--hill-near)"/><stop offset="1" stop-color="var(--grass)"/></linearGradient>
    </defs>
    <path fill="#cdd9b6" opacity=".7" d="M0,235 C200,195 360,215 560,205 C760,195 900,165 1100,195 C1260,220 1360,190 1440,200 L1440,400 L0,400 Z"/>
    <path fill="url(#g1)" d="M0,265 C180,215 330,235 520,250 C700,265 830,205 1000,230 C1160,255 1300,215 1440,240 L1440,400 L0,400 Z"/>
  </svg>
  <svg class="hills mid" viewBox="0 0 1440 400" preserveAspectRatio="none">
    <path fill="url(#g2)" d="M0,305 C220,270 400,300 600,290 C800,280 940,245 1140,275 C1300,300 1380,285 1440,290 L1440,400 L0,400 Z"/>
  </svg>
  <svg class="hills near" viewBox="0 0 1440 400" preserveAspectRatio="none">
    <path fill="url(#g3)" d="M0,352 C240,330 480,350 720,340 C960,330 1200,345 1440,335 L1440,400 L0,400 Z"/>
  </svg>
  <svg class="trees" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice" style="bottom:0;height:72vh;z-index:3">
    <g class="tree">
      <rect x="146" y="292" width="8" height="30" fill="var(--trunk)"/>
      <ellipse cx="150" cy="276" rx="30" ry="24" fill="var(--tree)"/>
      <ellipse cx="136" cy="286" rx="18" ry="15" fill="var(--tree-d)" opacity=".6"/>
    </g>
    <g class="tree">
      <rect x="1126" y="286" width="9" height="34" fill="var(--trunk)"/>
      <ellipse cx="1130" cy="266" rx="36" ry="28" fill="var(--tree)"/>
      <ellipse cx="1146" cy="278" rx="20" ry="16" fill="var(--tree-d)" opacity=".6"/>
    </g>
    <g class="tree" opacity=".85">
      <rect x="1066" y="258" width="6" height="22" fill="var(--trunk)"/>
      <ellipse cx="1069" cy="248" rx="22" ry="18" fill="var(--hill-mid)"/>
    </g>
    <g class="tree" opacity=".85">
      <rect x="386" y="262" width="6" height="22" fill="var(--trunk)"/>
      <ellipse cx="389" cy="252" rx="20" ry="17" fill="var(--hill-mid)"/>
    </g>

    <g fill="#f6f1e6" opacity=".9">
      <circle cx="260" cy="364" r="2.2"/><circle cx="300" cy="372" r="1.8"/><circle cx="640" cy="366" r="2"/>
      <circle cx="900" cy="370" r="2.2"/><circle cx="1340" cy="360" r="1.9"/><circle cx="500" cy="378" r="1.6"/>
    </g>
    <g fill="#f4c04a" opacity=".85">
      <circle cx="420" cy="368" r="2"/><circle cx="760" cy="374" r="1.8"/><circle cx="1120" cy="366" r="2"/>
    </g>
  </svg>
  <svg class="prop barn" viewBox="0 0 140 90">
    <defs>
      <linearGradient id="bw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c4655a"/><stop offset="1" stop-color="#a8493f"/></linearGradient>
      <linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9d4139"/><stop offset="1" stop-color="#7f332c"/></linearGradient>
      <linearGradient id="br" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5e4038"/><stop offset="1" stop-color="#7a534a"/></linearGradient>
      <linearGradient id="si" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a9b0a8"/><stop offset=".5" stop-color="#e2e6df"/><stop offset="1" stop-color="#b6bcb3"/></linearGradient>
    </defs>
    <g class="barn">
      <ellipse cx="78" cy="84" rx="70" ry="5" fill="#000" opacity=".08"/>
      <rect x="10" y="30" width="24" height="52" rx="2" fill="url(#si)"/>
      <path d="M10,30 a12,9 0 0 1 24,0 z" fill="#c9cfc6"/>
      <path d="M12,42 h20 M12,54 h20 M12,66 h20" stroke="#8f968c" stroke-width=".8" opacity=".7"/>
      <rect x="42" y="46" width="24" height="36" fill="url(#bs)"/>
      <path d="M42,46 L66,38 L66,46 Z" fill="#6b2b25"/>
      <rect x="66" y="46" width="66" height="36" fill="url(#bw)"/>
      <g stroke="#8f3a30" stroke-width=".7" opacity=".45"><path d="M74,46 v36 M82,46 v36 M90,46 v36 M108,46 v36 M116,46 v36 M124,46 v36"/></g>
      <path d="M64,48 L64,32 L80,20 L99,14 L118,20 L134,32 L134,48 Z" fill="url(#br)"/>
      <path d="M66,46 L66,33 L80,22 L99,16 L118,22 L132,33 L132,46 Z" fill="none" stroke="#3f2b26" stroke-width="1.2" opacity=".5"/>
      <rect x="90" y="60" width="18" height="22" rx="1" fill="#4a2723"/>
      <path d="M91,61 L107,81 M107,61 L91,81" stroke="#e6d6bb" stroke-width="1.2" opacity=".85"/>
      <rect x="94" y="26" width="10" height="10" rx="1" fill="#4a2723"/>
      <path d="M94,31 h10 M99,26 v10" stroke="#e6d6bb" stroke-width=".9" opacity=".7"/>
      <rect x="73" y="54" width="8" height="8" fill="#f2e7cc" stroke="#6b2b25" stroke-width="1"/>
      <rect x="117" y="54" width="8" height="8" fill="#f2e7cc" stroke="#6b2b25" stroke-width="1"/>
      <path d="M99,14 v-7 M95,8 h8" stroke="#3f2b26" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M99,7 l4,-2 l-4,-2 z" fill="#3f2b26"/>
    </g>
  </svg>
  <svg class="prop fence" viewBox="0 0 270 30">
    <g class="fence" stroke="#8b6a4a" stroke-width="3" stroke-linecap="round">
      <path d="M10,8 v18 M60,6 v18 M110,5 v18 M160,4 v18 M210,4 v18 M260,5 v18"/>
      <path d="M10,14 L260,11 M10,21 L260,18" stroke-width="2.2"/>
    </g>
  </svg>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <linearGradient id="cowbody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e6e2da"/></linearGradient>
      <linearGradient id="cowleg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4f1ea"/><stop offset="1" stop-color="#d9d4ca"/></linearGradient>
      <symbol id="cow-a" viewBox="0 0 150 100">
        <ellipse cx="72" cy="94" rx="46" ry="4" fill="#000" opacity=".10"/>
        <g class="leg lA"><path d="M40,60 l-2,30 h9 l1,-30z" fill="url(#cowleg)"/><rect x="37" y="86" width="10" height="6" rx="2" fill="#3b3733"/></g>
        <g class="leg lB"><path d="M52,60 l-1,30 h9 l0,-30z" fill="url(#cowleg)"/><rect x="50" y="86" width="10" height="6" rx="2" fill="#3b3733"/></g>
        <g class="leg lA"><path d="M88,60 l-1,30 h9 l0,-30z" fill="url(#cowleg)"/><rect x="86" y="86" width="10" height="6" rx="2" fill="#3b3733"/></g>
        <g class="leg lB"><path d="M100,60 l0,30 h9 l-1,-30z" fill="url(#cowleg)"/><rect x="99" y="86" width="10" height="6" rx="2" fill="#3b3733"/></g>
        <g class="body">
          <path class="tail" d="M32,40 c-8,6 -10,16 -6,26" fill="none" stroke="#3b3733" stroke-width="3" stroke-linecap="round"/>
          <path d="M26,64 c-4,2 -4,8 0,10 c3,1 5,-2 4,-6z" fill="#3b3733" class="tuft"/>
          <path d="M30,44 c0,-14 14,-22 42,-22 c26,0 42,6 44,20 c1,10 -2,20 -12,24 c-14,5 -52,6 -66,0 c-8,-3 -8,-12 -8,-22z" fill="url(#cowbody)"/>
          <path d="M40,64 c14,6 50,6 64,0 c-4,6 -20,8 -32,8 c-12,0 -28,-2 -32,-8z" fill="#000" opacity=".07"/>
          <path d="M70,66 c-6,0 -10,6 -8,10 c2,3 12,3 14,0 c2,-4 -1,-10 -6,-10z" fill="#f0b8bf"/>
          <path d="M44,28 c10,-6 22,-4 26,4 c2,8 -8,14 -18,14 c-10,-1 -14,-10 -8,-18z" fill="#3b3733"/>
          <path d="M84,40 c12,-8 26,-2 28,8 c1,8 -6,14 -16,13 c-10,-1 -18,-10 -12,-21z" fill="#3b3733"/>
          <path d="M34,50 c4,-2 10,0 10,6 c0,5 -6,7 -10,4 c-3,-3 -3,-8 0,-10z" fill="#3b3733"/>
          <g class="head">
            <path d="M104,34 c2,-12 14,-16 26,-14 c10,2 14,10 12,20 c-1,8 -8,14 -16,14 c-10,0 -18,-2 -22,-8 c-2,-3 -1,-8 0,-12z" fill="url(#cowbody)"/>
            <path d="M118,46 c10,-1 22,0 24,8 c1,6 -6,10 -14,10 c-8,0 -14,-4 -14,-10 c0,-4 2,-7 4,-8z" fill="#eec2c8"/>
            <circle cx="132" cy="56" r="1.5" fill="#3b3733"/><circle cx="138" cy="55" r="1.5" fill="#3b3733"/>
            <path d="M126,22 c-2,-6 2,-10 6,-8 c2,2 0,6 -2,8z M138,22 c2,-6 -2,-10 -6,-8 c-2,2 0,6 2,8z" fill="#e8dcc0"/>
            <path d="M106,30 c-8,-2 -12,2 -10,6 c2,3 8,2 12,-2z" fill="url(#cowbody)"/>
            <path d="M106,30 c-6,-1 -9,2 -8,4 c1,2 6,1 9,-2z" fill="#eec2c8" opacity=".7"/>
            <ellipse cx="128" cy="38" rx="2.4" ry="2.8" fill="#3b3733"/><circle cx="129" cy="37" r=".9" fill="#fff"/>
            <path d="M110,24 c6,-6 14,-6 18,-2 c-2,5 -8,7 -14,6 c-4,-1 -5,-3 -4,-4z" fill="#3b3733" opacity=".85"/>
          </g>
        </g>
      </symbol>
    </defs>
  </svg>

  <div class="herd">
    <div class="cow" style="--w:150px; --y:11vh; --t:80s; --d:-10s; --sx:15vw"><svg viewBox="0 0 150 100"><use href="#cow-a"/></svg></div>
    <div class="cow rev" style="--w:110px; --y:17vh; --t:100s; --d:-40s; --sx:65vw"><svg viewBox="0 0 150 100"><use href="#cow-a"/></svg></div>
    <div class="cow" style="--w:82px; --y:23vh; --t:125s; --d:-70s; --sx:40vw"><svg viewBox="0 0 150 100"><use href="#cow-a"/></svg></div>
  </div>`;
})();

// ---- alien abduction ----
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const scene = document.querySelector('.scene');
  const cows = [...document.querySelectorAll('.cow')];
  const storm = document.createElement('div'); storm.className = 'storm'; scene.appendChild(storm);
  const flash = document.createElement('div'); flash.className = 'flash'; scene.appendChild(flash);
  const BOLT = `<svg viewBox="0 0 60 160"><path d="M34,0 L8,74 L28,74 L14,160 L54,60 L32,60 L46,0 Z" fill="#fff8d6" stroke="#dfeaff" stroke-width="2" stroke-linejoin="round"/></svg>`;
  function lightning(x) {
    const b = document.createElement('div'); b.className = 'bolt'; b.innerHTML = BOLT;
    b.style.left = (x - 45 + (Math.random() * 160 - 80)) + 'px'; b.style.top = (-10 + Math.random() * 40) + 'px';
    b.style.transform = `rotate(${Math.random() * 24 - 12}deg) scale(${1.2 + Math.random() * .8})`;
    scene.appendChild(b);
    b.animate([{ opacity: 0 }, { opacity: 1, offset: .1 }, { opacity: .2, offset: .25 }, { opacity: 1, offset: .35 }, { opacity: 0 }],
              { duration: 380, fill: 'forwards' }).onfinish = () => b.remove();
    flash.animate([{ opacity: 0 }, { opacity: .75, offset: .1 }, { opacity: .1, offset: .3 }, { opacity: .5, offset: .4 }, { opacity: 0 }],
                  { duration: 420 });
    [scene, document.querySelector('.wrap')].forEach(el => { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); });
  }
  let busy = false;
  const UFO = `<svg viewBox="0 0 140 70" width="140" height="70">
    <g class="disc">
      <ellipse cx="70" cy="28" rx="26" ry="18" fill="#cfe9ff" opacity=".9"/>
      <ellipse cx="62" cy="22" rx="8" ry="5" fill="#fff" opacity=".8"/>
      <ellipse cx="70" cy="42" rx="62" ry="14" fill="#8e97a3"/>
      <ellipse cx="70" cy="38" rx="58" ry="10" fill="#c2c9d2"/>
      <ellipse cx="70" cy="34" rx="40" ry="5" fill="#e6ebf0" opacity=".7"/>
      <g class="lights"><circle cx="30" cy="47" r="3.5"/><circle cx="70" cy="52" r="3.5"/><circle cx="110" cy="47" r="3.5"/></g>
    </g></svg>`;
  function visibleCows() {
    const w = document.querySelector('.wrap').getBoundingClientRect();
    return cows.filter(c => {
      const r = c.getBoundingClientRect(); const cx = r.left + r.width / 2;
      const inGutter = cx < w.left - 40 || cx > w.right + 40;          // not behind the content cards
      const onScreen = r.left > 60 && r.right < innerWidth - 60;
      return inGutter && onScreen;
    });
  }
  function abduct(tries = 0) {
    if (busy || document.hidden) return;
    const pool = visibleCows();
    if (!pool.length) { if (tries < 30) setTimeout(() => abduct(tries + 1), 2000); return; }
    busy = true;
    const cow = pool[Math.floor(Math.random() * pool.length)];
    const r = cow.getBoundingClientRect();
    // freeze cow where it is
    cow.style.left = r.left + 'px'; cow.style.animation = 'none';
    const cx = r.left + r.width / 2;
    const ufo = document.createElement('div'); ufo.className = 'ufo'; ufo.innerHTML = UFO;
    const ufoTop = Math.max(90, r.top - Math.min(260, r.top * 0.6));
    ufo.style.left = (cx - 70) + 'px'; ufo.style.top = ufoTop + 'px';
    scene.appendChild(ufo);
    const beam = document.createElement('div'); beam.className = 'beam';
    const bw = Math.max(120, r.width * 1.6);
    beam.style.left = (cx - bw / 2) + 'px'; beam.style.top = (ufoTop + 44) + 'px';
    beam.style.width = bw + 'px'; beam.style.height = (r.bottom - ufoTop - 44) + 'px';
    scene.appendChild(beam);
    storm.classList.add('on');
    setTimeout(() => lightning(cx + 120), 700);
    const arrive = ufo.animate([
      { transform: 'translate(-40vw,-40vh) rotate(-8deg)', opacity: 0 },
      { transform: 'translate(6px,8px) rotate(3deg)', opacity: 1, offset: .85 },
      { transform: 'translate(0,0) rotate(0)', opacity: 1 }
    ], { duration: 1600, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
    arrive.onfinish = () => {
      beam.classList.add('on');
      setTimeout(() => {
        const lift = r.top - (ufoTop + 30);
        const up = cow.animate([
          { transform: 'translateY(0) rotate(0) scale(1)', opacity: 1 },
          { transform: `translateY(-${lift * .3}px) rotate(-12deg) scale(.95)`, opacity: 1, offset: .3 },
          { transform: `translateY(-${lift}px) rotate(25deg) scale(.15)`, opacity: 0 }
        ], { duration: 2400, easing: 'cubic-bezier(.4,0,.8,.2)', fill: 'forwards' });
        up.onfinish = () => {
          beam.classList.remove('on');
          setTimeout(() => {
            if (Math.random() < .5) lightning(cx - 160);
            ufo.animate([
              { transform: 'translate(0,0)' },
              { transform: 'translate(-6px,4px)', offset: .15 },
              { transform: 'translate(6px,-4px)', offset: .3 },
              { transform: 'translate(120vw,-45vh) rotate(10deg)', opacity: 0 }
            ], { duration: 1100, easing: 'cubic-bezier(.7,0,1,.4)', fill: 'forwards' }).onfinish = () => {
              ufo.remove(); beam.remove(); storm.classList.remove('on');
              setTimeout(() => {   // cow is returned, walks back in from the edge
                up.cancel(); cow.style.left = ''; cow.style.animation = 'none';
                void cow.offsetWidth; cow.style.animation = ''; cow.style.animationDelay = '0s';
                busy = false;
              }, 2500);
            };
          }, 500);
        };
      }, 700);
    };
  }
  function schedule() { setTimeout(() => { abduct(); schedule(); }, 35000 + Math.random() * 25000); }
  setTimeout(abduct, 12000); schedule();
})();
