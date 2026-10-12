/* ============================================================
   ALEXIA AVRAM — PORTFOLIO
   main.js · effetti, navigazione e rendering delle pagine
   Dipende da: data.js, i18n.js (caricati prima)
   ============================================================ */

document.documentElement.classList.add('js');

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t  = k => I18N.t(k);
const PAGE = document.body.dataset.page;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = matchMedia('(hover: hover) and (pointer: fine)').matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const CASES = PROJECTS.filter(p => p.type === 'case');
const title = p => t(p.title);

/* ─── IMMAGINI ─────────────────────────────────────────────── */
function imgTag(src, alt = '', { cls = '', eager = false, focus = '' } = {}) {
  const d = DIMS[src];
  const wh = d ? ` width="${d[0]}" height="${d[1]}"` : '';
  const st = focus ? ` style="object-position:${focus}"` : '';
  return `<img src="${src}" alt="${esc(alt)}"${wh}${st} class="fade-img ${cls}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"/>`;
}
function watchImages(root = document) {
  $$('img.fade-img:not(.is-loaded)', root).forEach(im => {
    const done = () => im.classList.add('is-loaded');
    if (im.complete && im.naturalWidth) done();
    else { im.addEventListener('load', done, { once: true }); im.addEventListener('error', done, { once: true }); }
  });
}

/* ─── COMPARSA ALLO SCROLL ─────────────────────────────────── */
const revealer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); revealer.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  : null;
function observeReveals(root = document) {
  $$('.reveal:not(.is-in)', root).forEach(el => revealer ? revealer.observe(el) : el.classList.add('is-in'));
}

/* ─── NAVIGAZIONE ──────────────────────────────────────────── */
(function nav() {
  const navEl = $('#nav');
  if (navEl) {
    const onScroll = () => navEl.classList.toggle('is-scrolled', scrollY > 30);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const burger = $('#burger'), menu = $('#mobMenu');
  if (burger && menu) {
    const toggle = open => {
      menu.classList.toggle('is-open', open);
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open);
      document.body.classList.toggle('is-locked', open);
    };
    burger.addEventListener('click', () => toggle(!menu.classList.contains('is-open')));
    $$('a', menu).forEach(a => a.addEventListener('click', () => toggle(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  }

  $$('.lang-btn').forEach(b => b.addEventListener('click', () => I18N.set(b.dataset.lang)));

  const back = $('[data-top]');
  if (back) back.addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }); });
})();

/* ─── TRANSIZIONE TRA PAGINE ───────────────────────────────── */
(function pageTransition() {
  const overlay = $('#pageOverlay');
  const reveal = () => overlay && overlay.classList.add('is-hidden');
  if (document.readyState === 'complete') reveal(); else addEventListener('load', reveal);
  setTimeout(reveal, 1800);                              /* sicurezza: non bloccare mai la pagina */
  addEventListener('pageshow', e => { if (e.persisted) reveal(); });

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/.test(href) || a.target === '_blank' || a.hasAttribute('download')) return;
    e.preventDefault();
    const url = new URL(href, location.href);
    if (I18N.get() === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
    if (!overlay || REDUCED) { location.href = url.href; return; }
    overlay.classList.remove('is-hidden');
    setTimeout(() => { location.href = url.href; }, 380);
  });
})();

/* ─── CURSORE ──────────────────────────────────────────────── */
(function cursor() {
  const ring = $('#cursorRing'), dot = $('#cursorDot');
  if (!ring || !dot || !FINE_POINTER || REDUCED) return;
  document.documentElement.classList.add('has-cursor');
  const label = $('span', ring);
  let mx = -100, my = -100, rx = -100, ry = -100;

  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  }, { passive: true });
  document.addEventListener('mouseleave', () => { ring.classList.add('is-hidden'); dot.classList.add('is-hidden'); });
  document.addEventListener('mouseenter', () => { ring.classList.remove('is-hidden'); dot.classList.remove('is-hidden'); });

  document.addEventListener('mouseover', e => {
    const view = e.target.closest('[data-cursor]');
    const link = e.target.closest('a, button, [role="button"]');
    ring.classList.toggle('is-view', !!view);
    ring.classList.toggle('is-link', !view && !!link);
    dot.classList.toggle('is-hidden', !!view);
    if (view && label) label.textContent = view.dataset.cursor === 'open' ? t({ it: 'Apri', en: 'Open' }) : t({ it: 'Vedi', en: 'View' });
  });

  (function loop() {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  })();
})();

/* ─── BOTTONI MAGNETICI ────────────────────────────────────── */
function magnetic(root = document) {
  if (!FINE_POINTER || REDUCED) return;
  $$('.mag', root).forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ─── LOADER + INGRESSO HERO (home) ────────────────────────── */
(function intro() {
  const loader = $('#loader');
  const ready = () => document.body.classList.add('is-ready');
  if (!loader) { requestAnimationFrame(() => requestAnimationFrame(ready)); return; }

  let seen = false;
  try { seen = sessionStorage.getItem('aa-intro') === '1'; sessionStorage.setItem('aa-intro', '1'); } catch (e) {}

  if (seen || REDUCED) {
    loader.remove();
    requestAnimationFrame(() => requestAnimationFrame(ready));
    return;
  }
  document.body.classList.add('is-locked');
  setTimeout(() => {
    loader.classList.add('is-done');
    document.body.classList.remove('is-locked');
    setTimeout(ready, 250);
    setTimeout(() => loader.remove(), 900);
  }, 1450);
})();

/* ─── LIGHTBOX ─────────────────────────────────────────────── */
const Lightbox = (() => {
  const lb = $('#lightbox');
  if (!lb) return { open() {} };
  const stage = $('.lb-stage', lb), thumbs = $('.lb-thumbs', lb), count = $('.lb-count', lb);
  const tEl = $('.lb-title', lb), tagEl = $('.lb-tags', lb), dEl = $('.lb-desc', lb);
  let items = [], idx = 0, lastFocus = null;

  function show(i) {
    idx = (i + items.length) % items.length;
    let im = $('img', stage);
    if (!im) { im = document.createElement('img'); stage.prepend(im); }
    im.classList.add('is-loading');
    im.onload = () => im.classList.remove('is-loading');
    im.src = items[idx];
    im.alt = `${tEl.textContent} — ${idx + 1}`;
    count.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    $$('.lb-thumb', thumbs).forEach((b, j) => b.classList.toggle('is-active', j === idx));
    const act = $('.lb-thumb.is-active', thumbs);
    if (act) act.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    [items[idx + 1], items[idx - 1]].forEach(s => { if (s) { const p = new Image(); p.src = s; } });
  }

  function open(project, start = 0, list) {
    items = list || project.images || [];
    if (!items.length) return;
    lastFocus = document.activeElement;
    tEl.textContent = title(project);
    tagEl.textContent = t(project.tags);
    dEl.textContent = t(project.desc);
    thumbs.innerHTML = items.map((s, j) => `<button class="lb-thumb" type="button" data-i="${j}" aria-label="${j + 1}"><img src="${s}" alt="" loading="lazy"/></button>`).join('');
    thumbs.hidden = items.length < 2;
    $$('.lb-arrow', lb).forEach(b => { b.hidden = items.length < 2; });
    show(start);
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    $('.lb-close', lb).focus({ preventScroll: true });
  }

  function close() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  $('.lb-close', lb).addEventListener('click', close);
  $('.lb-arrow--prev', lb).addEventListener('click', () => show(idx - 1));
  $('.lb-arrow--next', lb).addEventListener('click', () => show(idx + 1));
  thumbs.addEventListener('click', e => { const b = e.target.closest('.lb-thumb'); if (b) show(+b.dataset.i); });
  stage.addEventListener('click', e => { if (e.target === stage) close(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  let x0 = null;
  stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 45) show(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  return { open };
})();

/* click su card di tipo galleria (delegato) */
document.addEventListener('click', e => {
  const g = e.target.closest('[data-gallery]');
  if (!g) return;
  e.preventDefault();
  const p = PROJECTS.find(x => x.id === g.dataset.gallery);
  if (p) Lightbox.open(p, 0);
});

/* ─── CARD PROGETTO ────────────────────────────────────────── */
function card(p, { num = null, showDesc = true } = {}) {
  const isCase = p.type === 'case';
  const href = isCase ? `progetto.html?p=${p.id}` : '#';
  const attrs = isCase ? `href="${href}" data-cursor="view"` : `href="#${p.id}" data-gallery="${p.id}" data-cursor="open" role="button"`;
  return `
    <a class="pcard reveal${p.includes ? ' is-collection' : ''}" ${attrs} data-cats="${p.cats.join(' ')}">
      <div class="pcard-media">
        ${p.includes ? `<span class="pcard-badge"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><rect x="3" y="0.75" width="8.25" height="8.25" rx="1.5" fill="none" stroke="currentColor"/><rect x="0.75" y="3" width="8.25" height="8.25" rx="1.5" fill="currentColor"/></svg>Raccolta · ${p.includes.length} progetti</span>` : ''}
        ${imgTag(p.cover, title(p), { focus: p.focus })}
        ${p.includes ? `<span class="pcard-more">Scopri la raccolta →</span>` : ''}
      </div>
      <div class="pcard-info">
        ${num ? `<span class="pcard-num">${num}</span>` : ''}
        <h3 class="pcard-title">${esc(title(p))}</h3>
        <span class="pcard-tags">${esc(t(p.tags))}</span>
        ${showDesc ? `<p class="pcard-desc">${esc(t(p.desc))}</p>` : ''}
        ${p.includes ? `<ul class="pcard-includes">${p.includes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
      </div>
    </a>`;
}

function mount(el, html) {
  el.innerHTML = html;
  watchImages(el);
  observeReveals(el);
}

/* ─── HOME ─────────────────────────────────────────────────── */
function renderHome() {
  const feat = $('#featured');
  if (feat) {
    const pos = p => (typeof p.featured === 'number' ? p.featured : 99);
    const list = PROJECTS.filter(p => p.featured).sort((a, b) => pos(a) - pos(b));
    /* in evidenza divisi in due gruppi: prima Grafica, poi Web */
    const graf = list.filter(p => !p.cats.includes('web'));
    const web  = list.filter(p => p.cats.includes('web'));
    let n = 0;
    const group = (key, items, first) => items.length
      ? `<p class="feat-group${first ? ' is-first' : ''} reveal">${t(key)}</p>` + items.map(p => card(p, { num: String(++n).padStart(2, '0') })).join('')
      : '';
    mount(feat, group('sec.grafica', graf, true) + group('sec.web', web, !graf.length));
  }
  const strip = $('#moreStrip');
  if (strip) {
    const picks = ['vitaelis', 'unlucky', 'avis'].map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
    mount(strip, picks.map(p => `<a href="progetto.html?p=${p.id}" data-cursor="view"><div class="more-media">${imgTag(p.cover, title(p), { focus: p.focus })}</div><span>${esc(title(p))}</span></a>`).join(''));
  }
}

/* ─── PROGETTI ─────────────────────────────────────────────── */
/* Sezioni: Grafica (tutto ciò che non è web), Web, Progetti Extra (PDF) */
const isWeb = p => p.cats.includes('web');
const secOf = p => p.section || (isWeb(p) ? 'web' : 'grafica');
function renderWork() {
  const gGrid = $('#graficaGrid'), wGrid = $('#webGrid'), aGrid = $('#acadGrid');
  if (!gGrid) return;
  const graf = PROJECTS.filter(p => secOf(p) === 'grafica');
  const pk3d = PROJECTS.filter(p => secOf(p) === 'pack3d');
  const web  = PROJECTS.filter(p => secOf(p) === 'web');
  mount(gGrid, graf.map(p => card(p)).join(''));
  const pGrid = $('#pack3dGrid');
  if (pGrid) mount(pGrid, pk3d.map(p => card(p)).join(''));
  mount(wGrid, web.map(p => card(p)).join(''));
  mount(aGrid, ACADEMIC.map(a => `
    <a class="acard reveal" href="${a.pdf}" target="_blank" rel="noopener" data-cursor="open">
      <div class="acard-cover">${imgTag(a.cover, a.title)}</div>
      <div class="acard-info">
        <span class="label">${esc(t(a.label))}</span>
        <h3 class="acard-title">${esc(a.title)}</h3>
        <span class="acard-open">${t('acad.open')}</span>
      </div>
    </a>`).join(''));

  const n = { grafica: graf.length, pack3d: pk3d.length, web: web.length, extra: ACADEMIC.length };
  Object.entries(n).forEach(([k, v]) => {
    $$(`[data-count-n="${k}"]`).forEach(el => { el.textContent = v; });
    $$(`[data-count="${k}"]`).forEach(el => { el.textContent = `${v} ${t(k === 'extra' ? 'count.pdf' : 'count.projects')}`; });
  });

  /* evidenzia la sezione visibile nella barra */
  if (!renderWork.spy && 'IntersectionObserver' in window) {
    renderWork.spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        $$('#sectionNav .filter').forEach(f => f.classList.toggle('is-active', f.dataset.sec === e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['grafica', 'pack3d', 'web', 'extra'].forEach(id => { const el = document.getElementById(id); if (el) renderWork.spy.observe(el); });
  }

  /* link diretto a una galleria: progetti.html#vitaelis */
  const hash = decodeURIComponent(location.hash.slice(1));
  const target = PROJECTS.find(p => p.id === hash && p.type === 'gallery');
  if (target && !renderWork.opened) { renderWork.opened = true; setTimeout(() => Lightbox.open(target, 0), 500); }
}

/* ─── CASE STUDY ───────────────────────────────────────────── */
function caseImages(p) {
  const list = [];
  p.sections.forEach(s => s.rows.forEach(r => { const items = Array.isArray(r) ? r : (r.items || []); items.forEach(it => list.push(typeof it === 'string' ? it : it.src)); }));
  return list;
}
function renderCase() {
  const root = $('#case');
  if (!root) return;
  const id = new URLSearchParams(location.search).get('p');
  const p = CASES.find(x => x.id === id);

  if (!p) {
    root.innerHTML = `<section class="case-missing"><div class="wrap"><p class="lead">${t('case.notfound')}</p><p style="margin-top:2rem"><a class="btn btn-ghost" href="progetti.html">${t('case.back')}</a></p></div></section>`;
    return;
  }

  const n = CASES.indexOf(p);
  const next = CASES[(n + 1) % CASES.length];
  const all = caseImages(p);
  let k = -1;                                  /* indice immagine per la lightbox */

  const fig = (it, solo) => {
    const src = typeof it === 'string' ? it : it.src;
    const pad = typeof it === 'object' && it.pad;
    const wide = typeof it === 'object' && it.wide;
    const d = DIMS[src];
    const r = d ? (d[0] / d[1] * 100).toFixed(2) : 100;   /* proporzione × 100: le immagini riempiono sempre la riga */
    k += 1;
    return `<figure class="case-fig${pad ? ' is-pad' : ''}${wide ? ' is-wide' : ''}" style="--r:${r}${solo && d && !pad ? `;max-width:${d[0]}px` : ''}" data-lb="${k}" data-cursor="open" role="button" tabindex="0" aria-label="${esc(title(p))} — ${k + 1}">${imgTag(src, `${title(p)} — ${k + 1}`, { eager: k < 2 })}</figure>`;
  };

  document.title = `${title(p)} — Alexia Avram`;
  root.innerHTML = `
    <header class="case-hero">
      <div class="wrap">
        <a class="link-arrow case-back" href="progetti.html">${t('case.back')}</a>
        <p class="case-eyebrow reveal"><b>${t('card.case')} ${String(n + 1).padStart(2, '0')}</b><span>/ ${String(CASES.length).padStart(2, '0')}</span></p>
        <h1 class="case-title reveal" style="--d:.08s">${esc(title(p))}</h1>
        <div class="case-intro reveal" style="--d:.16s">
          <div class="case-text"><p class="lead">${esc(t(p.desc))}</p>${p.story ? `<div class="case-story">${t(p.story).map(x => `<p>${x}</p>`).join('')}</div>` : ''}</div>
          <dl class="case-meta">
            <div><dt>${t('case.discipline')}</dt><dd>${esc(t(p.discipline))}</dd></div>
            <div><dt>${t('case.deliverables')}</dt><dd><ul class="chips">${t(p.deliverables).map(d => `<li class="chip">${esc(d)}</li>`).join('')}</ul></dd></div>
            <div><dt>${t('case.type')}</dt><dd>${esc(t(p.tags))}</dd></div>
            ${p.year ? `<div><dt>Anno</dt><dd>${esc(p.year)}</dd></div>` : ''}
            ${p.role ? `<div><dt>Ruolo</dt><dd>${esc(t(p.role))}</dd></div>` : ''}
            ${p.tools ? `<div><dt>Strumenti</dt><dd><ul class="chips">${p.tools.map(x => `<li class="chip">${esc(x)}</li>`).join('')}</ul></dd></div>` : ''}
          </dl>
        </div>
      </div>
    </header>


    <div class="wrap">
      ${p.sections.map((s, i) => `
        <section class="case-section">
          <div class="case-section-head reveal">
            <span class="num">${String(i + 1).padStart(2, '0')}</span>
            <h2>${esc(t(s.title))}</h2>
          </div>
          <div class="case-rows">
            ${s.rows.map((row, j) => Array.isArray(row)
              ? `<div class="${s.grid ? 'case-grid' + (s.grid === 'cover' ? ' is-cover' : '') : 'case-row'} reveal">${row.map(it => fig(it, row.length === 1 && !s.grid)).join('')}</div>`
              : row.items
                ? `<div class="case-row ${row.small ? 'is-small' : 'is-narrow'} reveal">${row.items.map(it => fig(it, row.items.length === 1)).join('')}</div>`
                : `<p class="case-group${j ? '' : ' is-first'} reveal">${esc(t(row.label))}</p>`).join('')}
          </div>
        </section>`).join('')}
    </div>

    <a class="case-next" href="progetto.html?p=${next.id}" data-cursor="view">
      <div class="wrap">
        <div>
          <span class="label">${t('case.next')}</span>
          <div class="case-next-title">${esc(title(next))}</div>
          <p class="muted" style="margin-top:1rem">${esc(t(next.tags))}</p>
        </div>
        <div class="case-next-media">${imgTag(next.cover, title(next))}</div>
      </div>
    </a>`;

  watchImages(root);
  observeReveals(root);

  const openAt = el => Lightbox.open(p, +el.dataset.lb, all);
  root.onclick = e => { const f = e.target.closest('[data-lb]'); if (f) openAt(f); };
  root.onkeydown = e => {
    const f = e.target.closest('[data-lb]');
    if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openAt(f); }
  };
}

/* ─── AVVIO ────────────────────────────────────────────────── */
function render() {
  if (PAGE === 'home') renderHome();
  if (PAGE === 'work') renderWork();
  if (PAGE === 'case') renderCase();
  watchImages();
  observeReveals();
}

I18N.apply();
render();
magnetic();
I18N.onChange(render);

/* anno nel footer */
$$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
