/* ============================================================
   ALEXIA AVRAM — PORTFOLIO
   i18n.js · testi dell'interfaccia in italiano e inglese
   Nel markup:  data-i18n="chiave"       → testo semplice
                data-i18n-html="chiave"  → testo con <em>, <br>
   ============================================================ */

const STRINGS = {
  it: {
    'meta.title.home': 'Alexia Avram — Graphic & Web Designer',
    'meta.title.about': 'About — Alexia Avram',
    'meta.title.work': 'Progetti — Alexia Avram',
    'meta.desc': 'Portfolio di Alexia Avram — Graphic Designer e Web Designer specializzata in brand identity e comunicazione visiva.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Progetti',
    'nav.contact': 'Contatti',
    'nav.cv': 'Scarica CV',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Portfolio 2026',
    'hero.intro': 'Brand identity e comunicazione visiva, web, 3D e video. Un approccio versatile tra stili eleganti e soluzioni bold e d’impatto.',
    'hero.status': 'Disponibile per un’agenzia creativa',
    'hero.loc': 'Pescara, Italia',
    'hero.cta.work': 'Esplora i progetti',
    'hero.cta.about': 'Chi sono →',
    'hero.scroll': 'Scorri',

    'work.label': 'Selected Work',
    'work.title': 'Progetti in <em>evidenza</em>',
    'work.all': 'Tutti i progetti →',
    'card.case': 'Case study',
    'card.view': 'Vedi il progetto',
    'card.gallery': 'Apri la galleria',

    'about.label': 'About',
    'about.title': 'Graphic e Web Designer',
    'about.p1': 'Solida formazione in Graphic Design e Web Design, orientata alla brand identity e alla comunicazione visiva, branding, 3D e video. Approccio versatile tra stili eleganti e soluzioni bold e d’impatto.',
    'about.p1.full': 'Solida formazione in Graphic Design e Web Design, orientata alla brand identity e alla comunicazione visiva, branding, 3D e video. Approccio versatile tra stili eleganti e soluzioni bold e d’impatto. Forte attenzione ai dettagli, efficienza esecutiva e capacità di interpretare le esigenze del cliente.',
    'about.p2': 'Forte attenzione ai dettagli e capacità di interpretare le esigenze del cliente. Integro competenze nell’utilizzo degli strumenti di Intelligenza Artificiale applicati al design.',
    'about.p2.full': 'Integro competenze nell’utilizzo degli strumenti di Intelligenza Artificiale applicati al design. Alla ricerca di una prima esperienza strutturata in un’agenzia creativa.',
    'about.more': 'Scopri di più →',

    'skills.label': 'Competenze',
    'skills.title': 'Strumenti &amp; <em>tecnologie</em>',
    'skills.design': 'Design',
    'skills.web': 'Web',
    'skills.webother': 'Web &amp; Altro',
    'skills.other': 'Altro',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    'skills.ai': 'Strumenti AI',
    'soft.problem': 'Problem Solving',
    'soft.leadership': 'Leadership',
    'soft.multitasking': 'Multitasking',
    'soft.team': 'Team Work',
    'soft.flex': 'Flessibilità',
    'soft.adapt': 'Adattamento',
    'soft.stress': 'Gestione Stress',
    'soft.learning': 'Apprendimento Autonomo',

    'lang.label': 'Lingue',
    'lang.it': 'Italiano — Madrelingua',
    'lang.en': 'Inglese — C1 <em>(in corso)</em>',
    'lang.es': 'Spagnolo — C1 <em>(in corso)</em>',

    'more.label': 'Archivio',
    'more.title': 'Altri <em>lavori</em>',
    'more.text': 'Packaging, render 3D, altri siti web e i progetti accademici: l’archivio completo dei lavori.',
    'more.cta': 'Vai all’archivio →',

    'contact.label': 'Contatti',
    'contact.title': 'Parliamo di<br/><em>design</em>',
    'contact.cv': 'Scarica il CV',

    'footer.role': 'Graphic &amp; Web Designer',
    'footer.top': 'Torna su ↑',

    'aboutpage.label': 'Chi sono',
    'aboutpage.title': 'About',
    'aboutpage.cv': 'Scarica il CV completo',

    'tl.label': 'Percorso',
    'tl.title': 'Formazione &amp; <em>Esperienze</em>',
    'tl.exp': 'Esperienze',
    'tl.edu': 'Formazione',
    'tl.present': 'in corso',
    'tl.e1.title': 'Freelance Graphic Designer',
    'tl.e1.text': 'Logo &amp; Brand Identity · Clienti privati, attività commerciali e progetto internazionale in Albania.',
    'tl.e2.title': 'Tutor PNRR — Web Design',
    'tl.e2.text': 'IIS A. Volta · Progetto Next Generation EU. Docenza a studenti nella realizzazione di siti web tramite WordPress.',
    'tl.e3.title': 'Stage — Web Designer',
    'tl.e3.text': 'Semotion Agency · San Severo. Progettazione e sviluppo di siti web in ambiente professionale.',
    'tl.f0.title': 'Stage — Graphic &amp; Social Media',
    'tl.f0.text': 'MarketingUp · Pescara. Progettazione grafica e gestione delle pagine social: creazione di post sponsorizzati e montaggio di Reel.',
    'tl.f1.title': 'Certificazione AI',
    'tl.f1.text': 'Orientamento, innovazione e competenze digitali',
    'tl.f2.title': 'Corso di Graphic Design',
    'tl.f3.title': 'Diploma Web Designer &amp; Developer',
    'tl.f4.title': 'Diploma Sistemi Informativi Aziendali',

    'workpage.label': 'Archivio',
    'workpage.title': 'Progetti',
    'workpage.intro': 'Grafica, web e progetti accademici. Ogni progetto ha una pagina dedicata.',
    'filter.all': 'Tutti',
    'sec.grafica': 'Grafica',
    'sec.pack3d': 'Etichette & Render 3D',
    'sec.web': 'Web',
    'sec.extra': 'Progetti accademici (Extra)',
    'sec.grafica.title': 'Grafica',
    'sec.pack3d.title': 'Etichette &amp; <em>Render 3D</em>',
    'sec.web.title': 'Web',
    'sec.extra.title': 'Progetti <em>accademici</em>',
    'sec.grafica.text': 'Brand identity, packaging e campagne.',
    'sec.pack3d.text': 'Fustelle, etichette ed esecutivi di stampa, modellazione e render 3D.',
    'sec.web.text': 'Siti web, e-commerce e UI design.',
    'sec.extra.text': 'Progetti scolastici sviluppati durante il percorso di studi, consultabili in PDF.',
    'count.projects': 'progetti',
    'work.note': 'Il 90% dei progetti presenti in questa pagina sono progetti accademici.',
    'count.pdf': 'PDF',
    'acad.label': 'Formazione',
    'acad.title': 'Progetti <em>accademici</em>',
    'acad.text': 'Progetti sviluppati durante il percorso di studi, consultabili in PDF.',
    'acad.open': 'Apri PDF →',

    'case.back': '← Tutti i progetti',
    'case.discipline': 'Ambito',
    'case.deliverables': 'Deliverable',
    'case.type': 'Tipologia',
    'case.next': 'Progetto successivo',
    'case.notfound': 'Progetto non trovato.',

    'lb.close': 'Chiudi',
    'lb.prev': 'Immagine precedente',
    'lb.next': 'Immagine successiva'
  },

  en: {
    'meta.title.home': 'Alexia Avram — Graphic & Web Designer',
    'meta.title.about': 'About — Alexia Avram',
    'meta.title.work': 'Work — Alexia Avram',
    'meta.desc': 'Portfolio of Alexia Avram — Graphic and Web Designer specialising in brand identity and visual communication.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Portfolio 2026',
    'hero.intro': 'Brand identity and visual communication, web, 3D and video. A versatile approach, from elegant styles to bold, high-impact solutions.',
    'hero.status': 'Open to creative agency roles',
    'hero.loc': 'Pescara, Italy',
    'hero.cta.work': 'Explore the work',
    'hero.cta.about': 'About me →',
    'hero.scroll': 'Scroll',

    'work.label': 'Selected Work',
    'work.title': 'Featured <em>work</em>',
    'work.all': 'All projects →',
    'card.case': 'Case study',
    'card.view': 'View project',
    'card.gallery': 'Open gallery',

    'about.label': 'About',
    'about.title': 'Graphic &amp; Web Designer',
    'about.p1': 'Solid training in Graphic Design and Web Design, focused on brand identity and visual communication, branding, 3D and video. A versatile approach, from elegant styles to bold, high-impact solutions.',
    'about.p1.full': 'Solid training in Graphic Design and Web Design, focused on brand identity and visual communication, branding, 3D and video. A versatile approach, from elegant styles to bold, high-impact solutions. Strong attention to detail, efficient execution and the ability to understand what the client needs.',
    'about.p2': 'Strong attention to detail and the ability to understand what the client needs. I bring hands-on skills with Artificial Intelligence tools applied to design.',
    'about.p2.full': 'I bring hands-on skills with Artificial Intelligence tools applied to design. Looking for a first structured experience in a creative agency.',
    'about.more': 'Learn more →',

    'skills.label': 'Skills',
    'skills.title': 'Tools &amp; <em>technologies</em>',
    'skills.design': 'Design',
    'skills.web': 'Web',
    'skills.webother': 'Web &amp; Other',
    'skills.other': 'Other',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    'skills.ai': 'AI tools',
    'soft.problem': 'Problem Solving',
    'soft.leadership': 'Leadership',
    'soft.multitasking': 'Multitasking',
    'soft.team': 'Teamwork',
    'soft.flex': 'Flexibility',
    'soft.adapt': 'Adaptability',
    'soft.stress': 'Stress Management',
    'soft.learning': 'Self-directed Learning',

    'lang.label': 'Languages',
    'lang.it': 'Italian — Native',
    'lang.en': 'English — C1 <em>(in progress)</em>',
    'lang.es': 'Spanish — C1 <em>(in progress)</em>',

    'more.label': 'Archive',
    'more.title': 'More <em>work</em>',
    'more.text': 'Packaging, 3D renders, more websites and academic projects: the complete archive.',
    'more.cta': 'Go to the archive →',

    'contact.label': 'Contact',
    'contact.title': 'Let’s talk<br/><em>design</em>',
    'contact.cv': 'Download CV',

    'footer.role': 'Graphic &amp; Web Designer',
    'footer.top': 'Back to top ↑',

    'aboutpage.label': 'About me',
    'aboutpage.title': 'About',
    'aboutpage.cv': 'Download the full CV',

    'tl.label': 'Background',
    'tl.title': 'Education &amp; <em>Experience</em>',
    'tl.exp': 'Experience',
    'tl.edu': 'Education',
    'tl.present': 'present',
    'tl.e1.title': 'Freelance Graphic Designer',
    'tl.e1.text': 'Logo &amp; Brand Identity · Private clients, local businesses and an international project in Albania.',
    'tl.e2.title': 'PNRR Tutor — Web Design',
    'tl.e2.text': 'IIS A. Volta · Next Generation EU project. Teaching students to build websites with WordPress.',
    'tl.e3.title': 'Internship — Web Designer',
    'tl.e3.text': 'Semotion Agency · San Severo. Designing and developing websites in a professional environment.',
    'tl.f0.title': 'Internship — Graphic &amp; Social Media',
    'tl.f0.text': 'MarketingUp · Pescara. Graphic design and social media management: creating sponsored posts and editing Reels.',
    'tl.f1.title': 'AI Certification',
    'tl.f1.text': 'Guidance, innovation and digital skills',
    'tl.f2.title': 'Graphic Design Course',
    'tl.f3.title': 'Web Designer &amp; Developer Diploma',
    'tl.f4.title': 'Diploma in Business Information Systems',

    'workpage.label': 'Archive',
    'workpage.title': 'Work',
    'workpage.intro': 'Graphic design, web and academic projects. Each project has its own dedicated page.',
    'filter.all': 'All',
    'sec.grafica': 'Graphic design',
    'sec.pack3d': 'Labels & 3D renders',
    'sec.web': 'Web',
    'sec.extra': 'Academic projects (Extra)',
    'sec.grafica.title': 'Graphic <em>design</em>',
    'sec.pack3d.title': 'Labels &amp; <em>3D renders</em>',
    'sec.web.title': 'Web',
    'sec.extra.title': 'Academic <em>projects</em>',
    'sec.grafica.text': 'Brand identity, packaging and campaigns.',
    'sec.pack3d.text': 'Dielines, labels and print-ready artwork, 3D modelling and renders.',
    'sec.web.text': 'Websites, e-commerce and UI design.',
    'sec.extra.text': 'School projects developed during my studies, available as PDF.',
    'count.projects': 'projects',
    'work.note': '90% of the projects on this page are academic projects.',
    'count.pdf': 'PDF',
    'acad.label': 'Education',
    'acad.title': 'Academic <em>projects</em>',
    'acad.text': 'Projects developed during my studies, available as PDF.',
    'acad.open': 'Open PDF →',

    'case.back': '← All work',
    'case.discipline': 'Discipline',
    'case.deliverables': 'Deliverables',
    'case.type': 'Type',
    'case.next': 'Next project',
    'case.notfound': 'Project not found.',

    'lb.close': 'Close',
    'lb.prev': 'Previous image',
    'lb.next': 'Next image'
  }
};

const I18N = (() => {
  const KEY = 'aa-lang';
  const listeners = [];
  let lang = 'it';

  /* Il sito è solo in italiano: la lingua è fissa. (I testi inglesi restano nel file, non usati.) */

  /* testo localizzato: accetta una chiave oppure un oggetto {it, en} */
  function t(k) {
    if (k && typeof k === 'object') return k[lang] ?? k.it ?? '';
    return (STRINGS[lang] && STRINGS[lang][k]) ?? STRINGS.it[k] ?? k;
  }

  function apply(root = document) {
    document.documentElement.lang = lang;
    root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    root.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    const tk = document.body && document.body.dataset.titleKey;
    if (tk) document.title = t(tk);
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));
    document.querySelectorAll('.lang-btn').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on);
    });
  }

  function set(l) {
    if (l === lang || !STRINGS[l]) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
    listeners.forEach(fn => fn(lang));
  }

  return { t, apply, set, get: () => lang, onChange: fn => listeners.push(fn) };
})();
