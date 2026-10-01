const CONFIG = {
  name: 'Abdul Rehman',
  role: 'full-stack web developer',
  email: 'theabdulrehman2009@gmail.com',
  phone: '+92 317 2717778',
  years: 5,
  skills: 'HTML, CSS, JavaScript, React, Node.js and PostgreSQL',
  projects: 'Bazaar Pay, ClinicBook, Routely and Learnly',
  availability: 'open to freelance projects and full-time roles'
};

const THEMES = {
  fire: { name: 'Fire', c: '#ff5a1f', rgb: '255,90,31', brand: '#ff5a1f', accent: '#ffb347', bg: '#0e0e10', bgrgb: '14,14,16', card: '#17171a', card2: '#1f1f23', line: '#2b2b30', on: '#1a0d05', ink: '#f1ece4', mute: '#9b9a94', cols: ['255,244,200', '255,179,71', '255,90,31'] },
  red: { name: 'Red flame', c: '#ff2d3b', rgb: '255,45,59', brand: '#ff2d3b', accent: '#ff8a5b', bg: '#0f0b0c', bgrgb: '15,11,12', card: '#1a1315', card2: '#221a1c', line: '#33262a', on: '#1f0507', ink: '#f3e9ea', mute: '#a39394', cols: ['255,225,215', '255,138,91', '255,45,59'] },
  green: { name: 'Green flame', c: '#19e68c', rgb: '25,230,140', brand: '#19e68c', accent: '#b6ff6a', bg: '#08100d', bgrgb: '8,16,13', card: '#0f1a15', card2: '#16241d', line: '#1f3329', on: '#03150c', ink: '#e8f3ec', mute: '#8fa39a', cols: ['234,255,217', '182,255,106', '25,230,140'] },
  water: { name: 'Water', c: '#2bb3ff', rgb: '43,179,255', brand: '#2bb3ff', accent: '#7df0ff', bg: '#07111a', bgrgb: '7,17,26', card: '#0e1b27', card2: '#15263a', line: '#1f3447', on: '#031420', ink: '#e6f1fa', mute: '#8aa0b3', cols: ['230,250,255', '125,240,255', '43,179,255'], water: true },
  yellow: { name: 'Gold flame', c: '#ffd21f', rgb: '255,210,31', brand: '#ffd21f', accent: '#fff07a', bg: '#100e08', bgrgb: '16,14,8', card: '#1a170c', card2: '#231f10', line: '#352f18', on: '#1a1500', ink: '#f6f1dc', mute: '#a39d7e', cols: ['255,252,220', '255,230,90', '255,190,20'] },
  purple: { name: 'Purple flame', c: '#a855f7', rgb: '168,85,247', brand: '#a855f7', accent: '#e879f9', bg: '#0d0a14', bgrgb: '13,10,20', card: '#16111f', card2: '#1e1730', line: '#2e2444', on: '#14061f', ink: '#efe9fb', mute: '#9a8fb3', cols: ['245,230,255', '232,121,249', '168,85,247'] },
  white: { name: 'White', c: '#e5e7eb', rgb: '100,116,139', brand: '#111827', accent: '#64748b', bg: '#f5f6f8', bgrgb: '245,246,248', card: '#ffffff', card2: '#eef0f4', line: '#d9dde4', on: '#ffffff', ink: '#111827', mute: '#5b6475', cols: ['100,116,139', '71,85,105', '30,41,59'], light: true }
};

const PAGES = [['Home', 'index.html'], ['About', 'about.html'], ['Projects', 'projects.html'], ['Contact', 'contact.html']];
const current = location.pathname.split('/').pop() || 'index.html';

document.getElementById('site-header').innerHTML = `
<header class="site-header"><div class="wrap">
<a class="logo" href="index.html">${CONFIG.name}</a>
<nav class="nav" id="nav" aria-label="Main">${PAGES.map(p => `<a href="${p[1]}" class="${p[1] === current ? 'on' : ''}">${p[0]}</a>`).join('')}</nav>
<div class="themes" id="themes" role="group" aria-label="Colour theme">${Object.keys(THEMES).map(k => `<button data-t="${k}" style="--c:${THEMES[k].c}" aria-label="${THEMES[k].name} theme" title="${THEMES[k].name}"></button>`).join('')}</div>
<button class="menu" id="menu" aria-expanded="false">Menu</button>
</div></header>`;

document.getElementById('site-footer').innerHTML = `
<footer class="site-footer"><div class="wrap"><span>&copy; ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.</span><span>${CONFIG.email}</span></div></footer>`;

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  const open = document.getElementById('nav').classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

const mailLine = document.getElementById('mailLine');
if (mailLine) {
  mailLine.textContent = CONFIG.email;
  document.getElementById('phoneLine').textContent = CONFIG.phone;
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    form.querySelectorAll('input,textarea').forEach(f => f.classList.add('touched'));
    if (!form.checkValidity()) {
      msg.textContent = 'Please fill in every field with a valid email.';
      return;
    }
    const d = new FormData(form);
    const subject = encodeURIComponent('Project enquiry from ' + d.get('name'));
    const body = encodeURIComponent(d.get('message') + '\n\n' + d.get('name') + '\n' + d.get('email'));
    msg.textContent = 'Thank you, ' + d.get('name') + '. Your email app will open with the message ready to send.';
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    form.reset();
    form.querySelectorAll('.touched').forEach(f => f.classList.remove('touched'));
  });
}

const KNOWLEDGE = [
  { keys: ['hello', 'hi', 'hey', 'salam', 'assalam'], answer: () => `Hello! I am the assistant on ${CONFIG.name}'s portfolio. Ask me about skills, projects, experience or how to get in touch.` },
  { keys: ['skill', 'tech', 'stack', 'language', 'tool', 'tools'], answer: () => `${CONFIG.name} works with ${CONFIG.skills}.` },
  { keys: ['project', 'work', 'portfolio', 'built', 'case'], answer: () => `Recent projects include ${CONFIG.projects}. You can see details on the <a href="projects.html">Projects</a> page.` },
  { keys: ['experience', 'years', 'background', 'about', 'who', 'yourself'], answer: () => `${CONFIG.name} is a ${CONFIG.role} with ${CONFIG.years} years of experience in retail, healthcare and logistics products. More on the <a href="about.html">About</a> page.` },
  { keys: ['hire', 'available', 'availability', 'freelance', 'job', 'recruit'], answer: () => `${CONFIG.name} is currently ${CONFIG.availability}. The quickest way to start is the <a href="contact.html">contact form</a>.` },
  { keys: ['contact', 'email', 'phone', 'reach', 'call', 'number'], answer: () => `You can email ${CONFIG.email} or call ${CONFIG.phone}. The <a href="contact.html">Contact</a> page also has a form.` },
  { keys: ['price', 'cost', 'rate', 'quote', 'budget', 'charge'], answer: () => 'Pricing depends on scope and timeline. Send a short brief through the <a href="contact.html">contact form</a> and you will get a quote within two working days.' },
  { keys: ['thanks', 'thank', 'shukria'], answer: () => 'You are welcome! Let me know if there is anything else you would like to know.' },
  { keys: ['bye', 'goodbye'], answer: () => 'Goodbye, and thanks for visiting!' }
];
const FALLBACK = `I am not sure about that one. I can tell you about skills, projects, experience, availability or contact details, or you can write to ${CONFIG.email}.`;

function reply(text) {
  const tokens = text.toLowerCase().split(/\W+/).filter(Boolean);
  let best = null, top = 0;
  KNOWLEDGE.forEach(item => {
    const score = item.keys.filter(k => tokens.some(t => (k.length < 4 ? t === k : t.startsWith(k)))).length;
    if (score > top) { top = score; best = item; }
  });
  return best ? best.answer() : FALLBACK;
}

document.body.insertAdjacentHTML('beforeend', `
<button class="chat-toggle" id="chatToggle" aria-label="Open chat">&#128172;</button>
<section class="chat" id="chat" aria-label="Chat assistant">
<header><div><strong>Ask about ${CONFIG.name}</strong><small>Usually replies instantly</small></div><button id="chatClose" aria-label="Close chat">&times;</button></header>
<div class="log" id="log" aria-live="polite"></div>
<div class="quick" id="quick"><button>Skills</button><button>Projects</button><button>Hire me</button><button>Contact</button></div>
<form id="chatForm" autocomplete="off"><input id="chatInput" placeholder="Type your question" aria-label="Your question"><button type="submit">Send</button></form>
</section>`);

const chat = document.getElementById('chat');
const log = document.getElementById('log');
const input = document.getElementById('chatInput');

function add(html, who, asText) {
  const b = document.createElement('div');
  b.className = 'bubble ' + who;
  if (asText) b.textContent = html; else b.innerHTML = html;
  log.appendChild(b);
  log.scrollTop = log.scrollHeight;
  return b;
}

function ask(text) {
  add(text, 'me', true);
  const wait = add('Typing...', 'bot typing');
  setTimeout(() => { wait.remove(); add(reply(text), 'bot'); }, 550);
}

function openChat() {
  chat.classList.add('open');
  if (!log.children.length) add(`Hi! I can answer questions about ${CONFIG.name}'s work, skills and availability. What would you like to know?`, 'bot');
  input.focus();
}

document.getElementById('chatToggle').addEventListener('click', () => chat.classList.contains('open') ? chat.classList.remove('open') : openChat());
document.getElementById('chatClose').addEventListener('click', () => chat.classList.remove('open'));
document.getElementById('quick').addEventListener('click', e => { if (e.target.tagName === 'BUTTON') ask(e.target.textContent); });
document.getElementById('chatForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = input.value.trim();
  if (!v) return;
  input.value = '';
  ask(v);
});


const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mk = id => { const c = document.createElement('canvas'); c.id = id; document.body.appendChild(c); return c; };
const cb = mk('fxb'), cf = mk('fxf');
const gb = cb.getContext('2d'), gf = cf.getContext('2d');
const P = [];
let W = 0, H = 0, tt = 0, T = THEMES.fire, FXT = null, spr = [];

const FX = {
  fire: { t: 'flame', power: 1, ramp: [[255, 250, 210], [255, 170, 40], [255, 70, 15], [90, 15, 5]], extra: 'sparks' },
  red: { t: 'flame', power: 1.4, ramp: [[255, 225, 200], [255, 80, 60], [210, 15, 25], [60, 5, 10]], extra: 'sparks' },
  yellow: { t: 'flame', power: 1.15, ramp: [[255, 255, 235], [255, 225, 70], [255, 160, 10], [120, 60, 5]], extra: 'bolt' },
  green: { t: 'flame', power: .95, ramp: [[235, 255, 225], [90, 255, 150], [10, 190, 100], [5, 70, 45]] },
  purple: { t: 'flame', power: 1.05, ramp: [[250, 235, 255], [215, 110, 255], [130, 40, 220], [40, 10, 90]], extra: 'stars' },
  white: { t: 'snow' },
  water: { t: 'water' }
};

function resize() {
  const d = window.devicePixelRatio || 1;
  W = innerWidth; H = innerHeight;
  [cb, cf].forEach(c => { c.width = W * d; c.height = H * d; });
  [gb, gf].forEach(x => x.setTransform(d, 0, 0, d, 0, 0));
}
resize();
addEventListener('resize', resize);

function makeSprites(ramp) {
  const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
  const out = [];
  for (let i = 0; i < 24; i++) {
    const k = i / 23;
    const c = k < .25 ? mix(ramp[0], ramp[1], k / .25) : k < .6 ? mix(ramp[1], ramp[2], (k - .25) / .35) : mix(ramp[2], ramp[3], (k - .6) / .4);
    const s = document.createElement('canvas');
    s.width = s.height = 64;
    const x = s.getContext('2d');
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, `rgba(${c},1)`);
    gr.addColorStop(.4, `rgba(${c},.45)`);
    gr.addColorStop(1, `rgba(${c},0)`);
    x.fillStyle = gr;
    x.fillRect(0, 0, 64, 64);
    out.push(s);
  }
  return out;
}

function setTheme(name) {
  if (!THEMES[name]) name = 'fire';
  T = THEMES[name];
  FXT = FX[name];
  spr = FXT.ramp ? makeSprites(FXT.ramp) : [];
  const s = document.documentElement.style;
  ['bg', 'card', 'card2', 'line', 'brand', 'accent', 'on', 'ink', 'mute', 'rgb', 'bgrgb'].forEach(k => s.setProperty('--' + k, T[k]));
  document.querySelectorAll('#themes button').forEach(b => b.classList.toggle('on', b.dataset.t === name));
  try { localStorage.setItem('theme', name); } catch (e) {}
  P.length = 0;
}
let saved = 'fire';
try { saved = localStorage.getItem('theme') || 'fire'; } catch (e) {}
setTheme(saved);
document.getElementById('themes').addEventListener('click', e => { const b = e.target.closest('button'); if (b) setTheme(b.dataset.t); });

const rnd = (a, b) => a + Math.random() * (b - a);
const FRONT = { spark: 1, drop: 1, ring: 1, bolt: 1 };

function spark(x, y, power, spread) {
  const a = -Math.PI / 2 + rnd(-spread, spread), s = rnd(1, power);
  P.push({ k: 'spark', x, y, px: x, py: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0, max: rnd(30, 80), sz: rnd(.8, 2.1) });
}
function drop(x, y, power) {
  const a = -Math.PI / 2 + rnd(-1.2, 1.2), s = rnd(2, power);
  P.push({ k: 'drop', x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0, max: rnd(35, 70), sz: rnd(1.4, 3.2) });
}
function burst(x, y) {
  if (FXT.t === 'water') {
    P.push({ k: 'ring', x, y, r: 110, life: 0, max: 50 }, { k: 'ring', x, y, r: 70, life: 0, max: 36 });
    for (let i = 0; i < 22; i++) drop(x, y, 8);
  } else {
    for (let i = 0; i < 52; i++) spark(x, y, 9, 1.3);
  }
}

const inten = x => Math.max(0, .55 + .45 * Math.sin(x * .012 + tt * .03) * Math.sin(x * .0043 - tt * .017 + 2) + .15 * Math.sin(x * .031 + tt * .09));

function bolt() {
  const pts = [[rnd(W * .1, W * .9), 0]];
  const end = H * rnd(.35, .6);
  while (pts[pts.length - 1][1] < end) {
    const l = pts[pts.length - 1];
    pts.push([l[0] + rnd(-26, 26), l[1] + rnd(16, 30)]);
  }
  P.push({ k: 'bolt', pts, life: 0, max: 16 });
}

function frame() {
  tt++;
  gb.clearRect(0, 0, W, H);
  gf.clearRect(0, 0, W, H);
  const comp = T.light ? 'source-over' : 'lighter';
  gb.globalCompositeOperation = gf.globalCompositeOperation = comp;

  if (FXT.t === 'flame') {
    if (P.length < 2600) {
      const n = Math.ceil(W / 32);
      for (let i = 0; i < n; i++) {
        const x = rnd(-30, W + 30), it = inten(x);
        if (Math.random() > it) continue;
        P.push({ k: 'flame', x, y: H + rnd(0, 18), vx: rnd(-.4, .4), vy: -(H / 230) * rnd(.7, 1.3) * (.6 + it) * FXT.power, r: rnd(24, 46) * (.7 + it * .5), ph: rnd(0, 99), life: 0, max: rnd(55, 85) });
      }
    }
    if (Math.random() < .3) P.push({ k: 'ember', x: rnd(0, W), y: H - rnd(0, 40), vx: rnd(-.2, .2), vy: -rnd(.8, 2.2), sz: rnd(.8, 1.9), ph: rnd(0, 99), life: 0, max: rnd(150, 300) });
    if (FXT.extra === 'sparks' && Math.random() < .03) for (let i = 0; i < 6; i++) spark(rnd(0, W), H, 12, .6);
    if (FXT.extra === 'bolt' && Math.random() < .004) bolt();
    if (FXT.extra === 'stars' && Math.random() < .08) P.push({ k: 'star', x: rnd(0, W), y: rnd(0, H * .7), sz: rnd(1, 3), life: 0, max: rnd(70, 140) });
  } else if (FXT.t === 'snow') {
    if (P.length < 220 && Math.random() < .6) P.push({ k: 'snow', x: rnd(0, W), y: -10, vy: rnd(.5, 1.6), r: rnd(1.5, 4), ph: rnd(0, 99), life: 0, max: 99999 });
  } else {
    if (P.length < 170 && Math.random() < .35) P.push({ k: 'bubble', x: rnd(0, W), y: H + 10, vy: -rnd(.4, 1.1), r: rnd(2, 8), ph: rnd(0, 99), life: 0, max: rnd(240, 420) });
    for (let l = 0; l < 3; l++) {
      gb.fillStyle = `rgba(${T.rgb},${.08 + l * .035})`;
      gb.beginPath(); gb.moveTo(0, H);
      for (let x = 0; x <= W + 8; x += 8) gb.lineTo(x, H - 26 - l * 14 + Math.sin(x * .008 + tt * .02 * (l + 1) + l * 2) * (10 + l * 4));
      gb.lineTo(W, H); gb.closePath(); gb.fill();
    }
  }

  for (let i = P.length - 1; i >= 0; i--) {
    const p = P[i];
    if (++p.life > p.max || p.y > H + 30) { P.splice(i, 1); continue; }
    const k = p.life / p.max, g = FRONT[p.k] ? gf : gb;
    if (p.k === 'flame') {
      p.x += p.vx + Math.sin(tt * .07 + p.ph + p.y * .015) * .9;
      p.y += p.vy; p.vy *= .992;
      const rr = p.r * (1 - k * .7), a = Math.min(1, (1 - k) * 1.5) * (k < .08 ? k / .08 : 1) * .85;
      g.globalAlpha = a;
      g.drawImage(spr[Math.min(23, Math.floor(k * 24))], p.x - rr, p.y - rr, rr * 2, rr * 2);
      g.globalAlpha = 1;
    } else if (p.k === 'spark') {
      p.px = p.x; p.py = p.y;
      p.vy += .16; p.vx *= .985; p.vy *= .985;
      p.x += p.vx; p.y += p.vy;
      g.strokeStyle = `rgba(${k < .25 ? T.cols[0] : k < .6 ? T.cols[1] : T.cols[2]},${1 - k})`;
      g.lineWidth = p.sz * (1 - k * .6);
      g.lineCap = 'round';
      g.beginPath(); g.moveTo(p.px, p.py); g.lineTo(p.x, p.y); g.stroke();
    } else if (p.k === 'ember') {
      p.x += p.vx + Math.sin((p.life + p.ph) / 24) * .5; p.y += p.vy;
      const r = p.sz * 5, a = Math.sin(Math.PI * k) * .85;
      const gr = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      gr.addColorStop(0, `rgba(${T.cols[0]},${a})`);
      gr.addColorStop(.3, `rgba(${T.cols[1]},${a * .6})`);
      gr.addColorStop(1, `rgba(${T.cols[2]},0)`);
      g.fillStyle = gr; g.beginPath(); g.arc(p.x, p.y, r, 0, 7); g.fill();
    } else if (p.k === 'bubble') {
      p.x += Math.sin((p.life + p.ph) / 30) * .4; p.y += p.vy;
      const a = Math.sin(Math.PI * k);
      g.strokeStyle = `rgba(${T.cols[1]},${.55 * a})`; g.lineWidth = 1;
      g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.stroke();
      g.strokeStyle = `rgba(${T.cols[0]},${.7 * a})`;
      g.beginPath(); g.arc(p.x, p.y, p.r * .65, 3.6, 4.5); g.stroke();
    } else if (p.k === 'drop') {
      p.vy += .22; p.vx *= .99; p.x += p.vx; p.y += p.vy;
      g.fillStyle = `rgba(${T.cols[1]},${1 - k})`;
      g.beginPath(); g.arc(p.x, p.y, p.sz * (1 - k * .5), 0, 7); g.fill();
    } else if (p.k === 'ring') {
      g.strokeStyle = `rgba(${T.cols[1]},${.7 * (1 - k)})`; g.lineWidth = 2 * (1 - k) + .5;
      g.beginPath(); g.arc(p.x, p.y, p.r * (1 - Math.pow(1 - k, 3)), 0, 7); g.stroke();
    } else if (p.k === 'snow') {
      p.x += Math.sin((p.life + p.ph) / 40) * .6; p.y += p.vy;
      g.fillStyle = 'rgba(110,130,165,.55)';
      g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill();
    } else if (p.k === 'star') {
      const a = Math.sin(Math.PI * k), s = p.sz * 3 * a;
      g.strokeStyle = `rgba(${T.cols[0]},${a})`; g.lineWidth = 1;
      g.beginPath(); g.moveTo(p.x - s, p.y); g.lineTo(p.x + s, p.y); g.moveTo(p.x, p.y - s); g.lineTo(p.x, p.y + s); g.stroke();
    } else if (p.k === 'bolt') {
      const a = k < .5 ? 1 : 1 - (k - .5) * 2;
      g.fillStyle = `rgba(255,230,120,${.07 * a})`;
      g.fillRect(0, 0, W, H);
      g.shadowColor = 'rgb(255,200,40)'; g.shadowBlur = 18;
      g.strokeStyle = `rgba(255,248,200,${a})`; g.lineWidth = 2.2; g.lineJoin = 'round';
      g.beginPath(); p.pts.forEach((q, n) => n ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])); g.stroke();
      g.shadowBlur = 0;
    }
  }
  requestAnimationFrame(frame);
}
if (!reduced) frame();

document.addEventListener('click', e => {
  const b = e.target.closest('.btn');
  if (b && !reduced) { const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2); }
});
document.addEventListener('mousemove', e => {
  const b = e.target.closest && e.target.closest('.btn.primary');
  if (!b) return;
  const r = b.getBoundingClientRect();
  b.style.setProperty('--mx', e.clientX - r.left + 'px');
  b.style.setProperty('--my', e.clientY - r.top + 'px');
  if (!reduced && Math.random() < .7) { if (FXT.t === 'water') drop(e.clientX, e.clientY, 3.5); else spark(e.clientX, e.clientY, 3.2, .9); }
});