/* ============================================================
   ALEXIA AVRAM — PORTFOLIO
   data.js · contenuti dei progetti (IT / EN)

   COME AGGIUNGERE UN PROGETTO
   1. Crea la cartella  assets/img/<id>/  con cover.jpg e 1.jpg, 2.jpg…
   2. Aggiungi un oggetto all'array PROJECTS qui sotto:
      - type: 'case'    → ha una pagina dedicata (progetto.html?p=<id>)
   3. featured: 1…6 lo mette in home tra i progetti in evidenza (il numero è la posizione).
   Le dimensioni delle immagini (DIMS, in fondo) sono facoltative:
   se mancano vengono lette automaticamente al caricamento.
   ============================================================ */

const img = (id, n) => `assets/img/${id}/${n}.jpg`;

/* Etichette dei filtri nella pagina Progetti */
const CATEGORIES = {
  brand:     { it: 'Brand identity', en: 'Brand identity' },
  packaging: { it: 'Packaging',      en: 'Packaging' },
  web:       { it: 'Web design',     en: 'Web design' },
  campagne:  { it: 'Campagne',       en: 'Campaigns' },
  '3d':      { it: '3D',             en: '3D' }
};

const PROJECTS = [

  /* L’ordine qui è l’ordine di visualizzazione nella pagina Progetti */
  {
    id: 'melis', type: 'case', featured: 1, title: 'Melis', cats: ['brand', 'packaging'],
    tags: { it: 'Brand Identity · Packaging', en: 'Brand Identity · Packaging' },
    desc: { it: 'Brand identity per una pellicola naturale in cera d’api che sostituisce la plastica.', en: 'Brand identity for a natural beeswax wrap that replaces plastic.' },
    story: {
      it: [
        'Melis è un brand sostenibile di pellicole in 100% cotone ricoperte di cera d’api, pensate per sostituire la pellicola trasparente da cucina, che genera tantissimo spreco spesso senza che ce ne rendiamo conto.',
        'Il naming Melìs affonda le radici nel greco antico <em>méli</em> (miele), richiamando anche le <em>Melissai</em>, le ninfe mitologiche custodi delle api e del miele.',
        'Il progetto comprende logo, packaging, modellazione 3D, visual, contenuti social, una serie di gadget e la landing page.'
      ],
      en: [
        'Melis is a sustainable brand of 100% cotton wraps coated in beeswax, designed to replace kitchen cling film, which creates a huge amount of waste, often without us even noticing.',
        'The name Melìs is rooted in the ancient Greek <em>méli</em> (honey), and also recalls the <em>Melissai</em>, the mythological nymphs who guarded bees and honey.',
        'The project includes the logo, packaging, 3D modelling, visuals, social content, a series of merchandise and the landing page.'
      ]
    },
    discipline: { it: 'Brand identity · Packaging', en: 'Brand identity · Packaging' },
    deliverables: {
      it: ['Logo', 'Stationery', 'Packaging', 'Fustelle', 'Render 3D', 'Affissioni', 'Social media', 'Landing page'],
      en: ['Logo', 'Stationery', 'Packaging', 'Dielines', '3D renders', 'Outdoor posters', 'Social media', 'Landing page']
    },
    cover: img('melis', 'render1'),
    focus: '50% 80%',
    sections: [
      { title: { it: 'Logo', en: 'Logo' }, rows: [[{ src: img('melis', 'logo'), pad: true }]] },
      { title: { it: 'Stationery e insegna', en: 'Stationery & signage' }, rows: [[img('melis', 'stationery')], [img('melis', 'insegna')]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('melis', 'render1'), img('melis', 'render2')]] },
      { title: { it: 'Campagna', en: 'Campaign' }, rows: [[img('melis', 'poster'), img('melis', 'manifesto')]] },
      { title: { it: 'Social media', en: 'Social media' }, rows: [[img('melis', 'fb')], [img('melis', 'ig')], [img('melis', 'igcarosello')]] },
      { title: { it: 'Landing page', en: 'Landing page' }, rows: [[img('melis', 'landing1'), img('melis', 'landing2')], [img('melis', 'landing3'), img('melis', 'landing4')], [img('melis', 'landing5'), img('melis', 'landing6')], [img('melis', 'landing7'), img('melis', 'landing8')], { items: [img('melis', 'landing9')], narrow: true }, { items: [img('melis', 'landing10')], narrow: true }] }
    ]
  },
  {
    id: 'review', type: 'case', featured: 2, title: 'Review', cats: ['brand', 'packaging'],
    kicker: { it: 'Eyewear', en: 'Eyewear' },
    tags: { it: 'Brand Identity · Packaging', en: 'Brand Identity · Packaging' },
    desc: { it: 'Logo design e visual identity completa.', en: 'Logo design and complete visual identity.' },
    story: {
      it: [
        'Brand di occhiali dall’anima ecologica, attento alla sostenibilità in ogni fase. Il progetto comprende il logo, un packaging pensato per avere una seconda vita, i contenuti social e i mockup di una serie di gadget coordinati.',
        'Una volta aperto, il pack non diventa un rifiuto ma si trasforma in un oggetto da riutilizzare.'
      ],
      en: [
        'An eyewear brand with an ecological soul, attentive to sustainability at every stage. The project includes the logo, packaging designed to have a second life, social content and mockups of a series of coordinated merchandise.',
        'Once opened, the pack does not become waste but turns into an object to be reused.'
      ]
    },
    discipline: { it: 'Brand identity · Packaging', en: 'Brand identity · Packaging' },
    deliverables: {
      it: ['Logo', 'Monogramma', 'Social media', 'Sito web', 'Packaging', 'Render 3D', 'Accessori', 'Gift card'],
      en: ['Logo', 'Monogram', 'Social media', 'Website', 'Packaging', '3D renders', 'Accessories', 'Gift card']
    },
    cover: img('review', 'cover'),
    sections: [
      { title: { it: 'Logo e monogramma', en: 'Logo & monogram' }, rows: [[img('review', 'logo'), img('review', 'monogramma')]] },
      { title: { it: 'Social e web', en: 'Social & web' }, rows: [[img('review', 3), img('review', 4)], [img('review', 5)]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('review', 6)], [img('review', 7), img('review', 8)], [img('review', 11), img('review', 12)]] },
      { title: { it: 'Accessori', en: 'Accessories' }, rows: [[img('review', 9), img('review', 10)], [img('review', 13)]] },
      { title: { it: 'Render 3D', en: '3D renders' }, rows: [[img('review', 14)], [img('render3d', '3-ritaglio')], [img('render3d', 4), img('render3d', 5)]] }
    ]
  },
  {
    id: 'manavi',
    type: 'case',
    featured: 3,
    title: 'Manavi',
    kicker: { it: 'Every thread has a story', en: 'Every thread has a story' },
    cats: ['brand', 'packaging'],
    tags: { it: 'Brand Identity · Fashion', en: 'Brand Identity · Fashion' },
    desc: {
      it: 'Identità e packaging per brand fashion.',
      en: 'Identity and packaging for a fashion brand.'
    },
    story: {
      it: [
        'Manavi, “colui che vive”, è un brand di t-shirt ecosostenibili in ogni dettaglio, dai materiali agli inchiostri fino alla stampa.',
        'Ogni capo racconta un luogo del mondo, perché dietro ogni trama c’è un viaggio: da qui nasce la linea <em>Every thread has a story</em>. Un’identità che unisce rispetto per l’ambiente e voglia di raccontare.'
      ],
      en: [
        'Manavi, “the one who lives”, is a brand of t-shirts that are sustainable in every detail, from materials and inks to printing.',
        'Each garment tells the story of a place in the world, because behind every thread there is a journey: this is where the <em>Every thread has a story</em> line comes from. An identity that brings together respect for the environment and a desire to tell stories.'
      ]
    },
    discipline: { it: 'Brand identity · Fashion', en: 'Brand identity · Fashion' },
    deliverables: {
      it: ['Logo', 'Capsule abbigliamento', 'Accessori', 'Packaging', '3D del packaging', 'Render 3D', 'Affissioni', 'Social media'],
      en: ['Logo', 'Apparel capsule', 'Accessories', 'Packaging', '3D packaging', '3D renders', 'Posters', 'Social media']
    },
    cover: img('manavi', 'cover'),
    sections: [
      { title: { it: 'Logo', en: 'Logo' }, rows: [[img('manavi', 1)]] },
      { title: { it: 'Abbigliamento', en: 'Apparel' }, rows: [[img('manavi', 2)], [img('manavi', 15)], [img('manavi', 16)]] },
      { title: { it: 'Accessori', en: 'Accessories' }, rows: [[img('manavi', 8), img('manavi', 9)], [img('manavi', 10), img('manavi', 11)], [img('manavi', 13), img('manavi', 14)]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('manavi', 4), img('manavi', 17)]] },
      { title: { it: 'Campagna', en: 'Campaign' }, rows: [[img('manavi', 3)], [img('manavi', 5)], [img('manavi', 6), img('manavi', 7)]] }
    ]
  },
  {
    id: 'vitaelis', type: 'case', title: 'Vitaelis', cats: ['brand', 'packaging'],
    kicker: { it: 'L’innovazione che si prende cura di te', en: 'Innovation that takes care of you' },
    tags: { it: 'Brand Identity · Packaging', en: 'Brand Identity · Packaging' },
    desc: { it: 'Brand wellness con packaging coordinato e comunicazione integrata.', en: 'Wellness brand with coordinated packaging and integrated communication.' },
    story: {
      it: [
        'Il logo gioca su un dettaglio: la “a” minuscola, stilizzata e sormontata da una fogliolina, ricompone la lettera A e richiama la natura e la vita già contenute nel nome.',
        'L’identità si sviluppa poi su etichette, packaging, manifesto, contenuti social e una serie di gadget coordinati. Ogni linea inoltre ha il suo colore dedicato che ricorda i principi attivi degli integratori.'
      ],
      en: [
        'The logo plays on a detail: the lowercase “a”, stylised and topped with a small leaf, recomposes the letter A and evokes the nature and life already contained in the name.',
        'The identity then extends to labels, packaging, a poster, social content and a series of coordinated merchandise. Each line also has its own dedicated colour, recalling the active ingredients of the supplements.'
      ]
    },
    discipline: { it: 'Brand identity · Packaging', en: 'Brand identity · Packaging' },
    deliverables: {
      it: ['Logo', 'Campagna affissioni', 'Social media', 'Brochure', 'Packaging', 'Render 3D', 'Stationery', 'Gadget'],
      en: ['Logo', 'Outdoor campaign', 'Social media', 'Brochure', 'Packaging', '3D renders', 'Stationery', 'Merchandise']
    },
    cover: img('vitaelis', 'render3'),
    focus: '48% 50%',
    sections: [
      { title: { it: 'Logo', en: 'Logo' }, rows: [[{ src: img('vitaelis', 1), pad: true }]] },
      { title: { it: 'Campagna', en: 'Campaign' }, rows: [[img('vitaelis', 2), img('vitaelis', 3)], [img('vitaelis', 4)], [img('vitaelis', 5)]] },
      { title: { it: 'Brochure e social', en: 'Brochure & social' }, rows: [[img('vitaelis', 6)], [img('vitaelis', 7)], [img('vitaelis', 8)]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('vitaelis', 'cover')], [img('vitaelis', 9)], [img('vitaelis', 13)], [img('vitaelis', 15)]] },
      { title: { it: 'Stationery e gadget', en: 'Stationery & merchandise' }, rows: [[img('vitaelis', 10)], [img('vitaelis', 11), img('vitaelis', 12)]] },
      { title: { it: 'Render 3D', en: '3D renders' }, rows: [[img('vitaelis', 'render3')], [img('render3d', 2)], [img('render3d', 10)]] },
      { title: { it: 'Esecutivi', en: 'Dielines' }, rows: [[img('vitaelis', 16)], [img('vitaelis', 17), img('vitaelis', 18)]] }
    ]
  },
  {
    id: 'unlucky', type: 'case', title: { it: 'Unlucky — Gioco da tavolo', en: 'Unlucky — Board game' }, cats: ['brand', 'packaging'],
    tags: { it: 'Gioco da tavolo · Brand Identity', en: 'Board game · Brand Identity' },
    desc: { it: 'Identità, personaggi, packaging e comunicazione per un gioco da tavolo.', en: 'Identity, characters, packaging and communication for a board game.' },
    story: {
      it: [
        'Unlucky è un progetto di gruppo: un gioco da tavolo tutto basato sulla sfiga.',
        'Il progetto comprende il logo, il packaging, le grafiche, le carte e i componenti di gioco, i render 3D e il regolamento.'
      ],
      en: [
        'Unlucky is a group project: a board game built entirely around bad luck.',
        'The project includes the logo, packaging, graphics, cards and game components, 3D renders and the rulebook.'
      ]
    },
    role: { it: 'Progetto di gruppo', en: 'Group project' },
    discipline: { it: 'Brand identity · Packaging', en: 'Brand identity · Packaging' },
    deliverables: {
      it: ['Logo', 'Personaggi', 'Carte e componenti', 'Packaging', 'Fustelle', 'Render 3D', 'Regolamento', 'Social media', 'Gadget'],
      en: ['Logo', 'Characters', 'Cards & components', 'Packaging', 'Dielines', '3D renders', 'Rulebook', 'Social media', 'Merchandise']
    },
    cover: img('gioco-da-tavolo', 'render3'),
    sections: [
      { title: { it: 'Logo', en: 'Logo' }, rows: [[{ src: img('gioco-da-tavolo', 'logo'), pad: true }]] },
      { title: { it: 'Personaggi', en: 'Characters' }, rows: [{ items: [img('gioco-da-tavolo', 'personaggi')], small: true }] },
      { title: { it: 'Regolamento', en: 'Rulebook' }, rows: [[img('gioco-da-tavolo', 'flyer')]] },
      { title: { it: 'Social media', en: 'Social media' }, rows: [[img('gioco-da-tavolo', 'fb')], [img('gioco-da-tavolo', 'ig')], [img('gioco-da-tavolo', 'igcarosello')]] },
      { title: { it: 'Gadget', en: 'Merchandise' }, rows: [[img('gioco-da-tavolo', 'magliette')], [img('gioco-da-tavolo', 'spille')], [img('gioco-da-tavolo', 'stickers1'), img('gioco-da-tavolo', 'stickers2')]] }
    ]
  },
  {
    id: 'zipeatz', type: 'case', title: 'ZipEatz', cats: ['brand', 'packaging'],
    kicker: { it: 'Food delivery', en: 'Food delivery' },
    tags: { it: 'Brand Identity · Packaging', en: 'Brand Identity · Packaging' },
    desc: { it: 'Restyling natalizio per un brand di food delivery.', en: 'Christmas restyling for a food delivery brand.' },
    story: {
      it: [
        'Restyling in chiave natalizia per un brand di food delivery, il cui nome unisce la velocità di uno <em>zip</em> al piacere di mangiare.',
        'Il progetto comprende la fustella e il packaging, campagne adv offline e online e i mockup di una serie di gadget a tema, per portare l’atmosfera delle feste fino alla porta di casa.'
      ],
      en: [
        'A Christmas-themed restyling for a food delivery brand whose name combines the speed of a <em>zip</em> with the pleasure of eating.',
        'The project includes the dieline and packaging, offline and online ad campaigns and mockups of a series of themed merchandise, bringing the holiday atmosphere right to the front door.'
      ]
    },
    discipline: { it: 'Brand identity · Packaging', en: 'Brand identity · Packaging' },
    deliverables: {
      it: ['Fustella', 'Packaging', 'Adesivi', 'Borsa delivery', 'Scontrino', 'Affissioni', 'Social media'],
      en: ['Dieline', 'Packaging', 'Stickers', 'Delivery bag', 'Receipt', 'Outdoor posters', 'Social media']
    },
    cover: img('zipeatz', 'copertina'),
    sections: [
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('zipeatz', 6), img('zipeatz', 7)], [img('zipeatz', 5)]] },
      { title: { it: 'Delivery', en: 'Delivery' }, rows: [[img('zipeatz', 8), img('zipeatz', 9)]] },
      { title: { it: 'Campagna', en: 'Campaign' }, rows: [[img('zipeatz', 1)]] },
      { title: { it: 'Social media', en: 'Social media' }, rows: [[img('zipeatz', 3), img('zipeatz', 4)]] },
      { title: { it: 'Fustella', en: 'Dieline' }, rows: [[img('pack-etichette', 10)]] }
    ]
  },
  {
    id: 'avis',
    type: 'case',
    title: 'Avis',
    kicker: { it: 'Dona tempo a chi ne ha bisogno', en: 'Give time to those in need' },
    cats: ['brand', 'campagne'],
    tags: { it: 'Campagna Sociale', en: 'Social Campaign' },
    desc: {
      it: 'Campagna sociale per la donazione del sangue.',
      en: 'Social campaign promoting blood donation.'
    },
    story: {
      it: [
        'Avis è un progetto di gruppo: abbiamo creato un visual con un cuore-batteria che si ricarica. È una metafora del dono: con un gesto semplice possiamo “ricaricare” chi ne ha bisogno.',
        'Dal concept si sono poi sviluppati un calendario e una linea di gadget coordinati, per portare il messaggio nella quotidianità di tutti.'
      ],
      en: [
        'Avis is a group project: we created a visual featuring a heart-shaped battery that recharges. It is a metaphor for giving: with a simple gesture we can “recharge” those in need.',
        'The concept then grew into a calendar and a line of coordinated merchandise, bringing the message into everyone’s daily life.'
      ]
    },
    role: { it: 'Progetto di gruppo', en: 'Group project' },
    discipline: { it: 'Campagna sociale', en: 'Social campaign' },
    deliverables: {
      it: ['Affissioni', 'Brochure', 'Social media', 'Gadget', 'Calendario'],
      en: ['Outdoor posters', 'Brochure', 'Social media', 'Merchandise', 'Calendar']
    },
    cover: img('avis', 'cover'),
    sections: [
      { title: { it: 'Campagna social', en: 'Social campaign' }, rows: [[img('avis', 5), img('avis', 6)]] },
      { title: { it: 'Materiali informativi', en: 'Printed materials' }, rows: [[img('avis', 3), img('avis', 4)], [img('avis', 13)]] },
      { title: { it: 'Gadget', en: 'Merchandise' }, rows: [[img('avis', 7), img('avis', 8)], [img('avis', 9), img('avis', 10)], [img('avis', 11), img('avis', 12)]] }
    ]
  },
  {
    id: 'anymalia',
    type: 'case',
    title: 'Anymalia',
    kicker: { it: 'Pat your pet', en: 'Pat your pet' },
    cats: ['brand', 'packaging'],
    tags: { it: 'Brand Identity · Logo', en: 'Brand Identity · Logo' },
    desc: {
      it: 'Identità visiva per brand nel settore animali.',
      en: 'Visual identity for a brand in the pet sector.'
    },
    story: {
      it: [
        'Anymalia nasce da un gioco di parole: <em>any</em> (tutti), <em>anomalia</em> e <em>animal</em>. Perché gli animali sono un’anomalia felice che cambia la nostra vita in meglio.',
        'Nel logo la “M” diventa un cuore morbido e il lettering dalle forme arrotondate trasmette calore, cura e accoglienza.'
      ],
      en: [
        'Anymalia comes from a play on words: <em>any</em>, <em>anomalia</em> (Italian for anomaly) and <em>animal</em>. Because animals are a happy anomaly that changes our lives for the better.',
        'In the logo the “M” becomes a soft heart, and the rounded lettering conveys warmth, care and welcome.'
      ]
    },
    discipline: { it: 'Brand identity', en: 'Brand identity' },
    deliverables: {
      it: ['Logo', 'Stationery', 'Packaging', 'Merchandising', 'Insegna e interni', 'Sito web'],
      en: ['Logo', 'Stationery', 'Packaging', 'Merchandise', 'Signage & interiors', 'Website']
    },
    cover: img('anymalia', 'copertina'),
    sections: [
      { title: { it: 'Logo', en: 'Logo' }, rows: [[{ src: img('anymalia', 1), pad: true }]] },
      { title: { it: 'Stationery', en: 'Stationery' }, rows: [[img('anymalia', 3)], [img('anymalia', 8), img('anymalia', 9)]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('anymalia', 4)], [img('anymalia', 5), img('anymalia', 6)], [img('anymalia', 7), img('anymalia', 10)]] },
      { title: { it: 'Spazi e digitale', en: 'Spaces & digital' }, rows: [[img('anymalia', 2)], [img('anymalia', 11)], [img('anymalia', 12)]] }
    ]
  },
  {
    id: 'orsosobrio', type: 'case', title: 'Orso Sobrio', cats: ['brand', 'packaging'],
    kicker: { it: 'L’Orso Bruno · Birrificio', en: 'L’Orso Bruno · Brewery' },
    tags: { it: 'Brand Identity · Packaging', en: 'Brand Identity · Packaging' },
    desc: { it: 'Birra analcolica 0.0 alle castagne: packaging, etichette e comunicazione.', en: 'Chestnut 0.0 alcohol-free beer: packaging, labels and communication.' },
    story: {
      it: [
        'Birra 0.0 analcolica per la quale il progetto prevedeva anche la scelta del gusto. La scelta è ricaduta sulle castagne, che richiamano il bosco e l’autunno e si legano naturalmente alla figura dell’orso.',
        'Il lavoro comprende packaging, etichette, modellazione 3D, visual, contenuti social e i mockup di una serie di gadget coordinati.'
      ],
      en: [
        'A 0.0 alcohol-free beer, for which the project also included choosing the flavour. The choice fell on chestnuts, which evoke the woods and autumn and connect naturally with the figure of the bear.',
        'The work includes packaging, labels, 3D modelling, visuals, social content and mockups of a series of coordinated merchandise.'
      ]
    },
    discipline: { it: 'Brand identity · Packaging', en: 'Brand identity · Packaging' },
    deliverables: {
      it: ['Affissioni', 'Flyer', 'Social media', 'Adesivi', 'Spille', 'Packaging'],
      en: ['Outdoor posters', 'Flyers', 'Social media', 'Stickers', 'Badges', 'Packaging']
    },
    cover: img('render3d', 8),
    focus: '50% 60%',
    sections: [
      { title: { it: 'Campagna', en: 'Campaign' }, rows: [[img('orsosobrio', 1)], [img('orsosobrio', 2)]] },
      { title: { it: 'Social media', en: 'Social media' }, rows: [[img('orsosobrio', 3)], [img('orsosobrio', 4)]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('render3d', 7)], [img('render3d', 8), img('render3d', 9)]] },
      { title: { it: 'Gadget', en: 'Merchandise' }, rows: [[img('orsosobrio', 5), img('orsosobrio', 6)]] }
    ]
  },
  {
    id: 'diriso', type: 'case', title: 'Di Riso', cats: ['packaging', 'campagne'],
    kicker: { it: 'Tradizione italiana, velocità contemporanea', en: 'Italian tradition, contemporary speed' },
    tags: { it: 'Packaging · Pubblicità', en: 'Packaging · Advertising' },
    desc: { it: 'Packaging e comunicazione food brand.', en: 'Packaging and communication for a food brand.' },
    story: {
      it: [
        'Brand di risotti pronti in 5 minuti che porta in tavola le ricette della tradizione italiana senza rinunciare al gusto. Il progetto comprende la fustella e il packaging, i render del prodotto, i visual, i contenuti social e i mockup di una serie di gadget coordinati.',
        'Un’identità semplice e genuina, dove anche il nome gioca sul doppio senso del “riso”, tra ingrediente e sorriso.'
      ],
      en: [
        'A brand of ready-in-5-minutes risottos that brings traditional Italian recipes to the table without compromising on taste. The project includes the dieline and packaging, product renders, visuals, social content and mockups of a series of coordinated merchandise.',
        'A simple, genuine identity, where even the name plays on the double meaning of “riso” in Italian: both rice and laughter.'
      ]
    },
    discipline: { it: 'Packaging · Advertising', en: 'Packaging · Advertising' },
    deliverables: {
      it: ['Affissioni', 'Bus', 'Social media', 'Brochure', 'Materiali punto vendita', 'Packaging', 'Fustelle'],
      en: ['Outdoor posters', 'Bus wrap', 'Social media', 'Brochure', 'In-store materials', 'Packaging', 'Dielines']
    },
    cover: img('diriso', 'cover'),
    sections: [
      { title: { it: 'Campagna', en: 'Campaign' }, rows: [[img('diriso', 2)], [img('diriso', 3), img('diriso', 4)]] },
      { title: { it: 'Materiali stampati', en: 'Printed materials' }, rows: [[img('diriso', 6), img('diriso', 7)], [img('diriso', 8)]] },
      { title: { it: 'Packaging', en: 'Packaging' }, rows: [[img('diriso', 9), img('diriso', 10), img('diriso', 11)]] },
      { title: { it: 'Fustelle', en: 'Dielines' }, rows: [[img('pack-etichette', 7)]] }
    ]
  },
  {
    id: 'epilogo',
    type: 'case',
    featured: 4,
    title: 'Epilogo',
    kicker: { it: 'E-commerce borse da donna', en: "Women's handbags e-commerce" },
    cats: ['web'],
    tags: { it: 'E-Commerce · WordPress', en: 'E-Commerce · WordPress' },
    desc: {
      it: 'Sito e-commerce specializzato nella vendita di borse da donna con landing page bonus.',
      en: "E-commerce website specialised in women's handbags, with a bonus landing page."
    },
    story: {
      it: [
        'Epilogo è un e-commerce di borse completo di shop e checkout.',
        'Il progetto comprende la creazione del logo, la UX e la UI e il design dell’intero sito.'
      ],
      en: [
        'Epilogo is a handbag e-commerce site complete with shop and checkout.',
        'The project covers the creation of the logo, the UX and UI, and the design of the entire website.'
      ]
    },
    discipline: { it: 'Web design · E-commerce', en: 'Web design · E-commerce' },
    deliverables: {
      it: ['Logo', 'Sitemap', 'Wireframe', 'UI desktop e mobile', 'Dark mode'],
      en: ['Logo', 'Sitemap', 'Wireframes', 'Desktop & mobile UI', 'Dark mode']
    },
    cover: img('epilogo', 'cover'),
    focus: '50% 22%',          /* punto focale della cover nei ritagli larghi */
    sections: [
      { title: { it: 'Logo', en: 'Logo' }, rows: [{ items: [{ src: img('epilogo', 1), pad: true }], narrow: true }] },
      { title: { it: 'Architettura dell\'informazione', en: 'Information architecture' }, rows: [{ items: [{ src: img('epilogo', 2), pad: true }], narrow: true }] },
      { title: { it: 'Wireframe', en: 'Wireframes' }, rows: [{ items: [img('epilogo', 3)], narrow: true }, { items: [img('epilogo', 4)], narrow: true }, { items: [img('epilogo', 5)], narrow: true }] },
      { title: { it: 'UI design', en: 'UI design' }, rows: [{ items: [img('epilogo', 6)], narrow: true }, { items: [img('epilogo', 7)], narrow: true }, { items: [img('epilogo', 8)], narrow: true }] },
      { title: { it: 'Dark mode', en: 'Dark mode' }, rows: [{ items: [img('epilogo', 9)], narrow: true }, { items: [img('epilogo', 10)], narrow: true }, { items: [img('epilogo', 11)], narrow: true }] }
    ]
  },
  {
    id: 'concerto',
    type: 'case',
    featured: 5,
    title: { it: 'Tour & Merch', en: 'Tour & Merch' },
    kicker: { it: 'Il caos vi chiama', en: 'Chaos is calling' },
    cats: ['web'],
    tags: { it: 'Web Design · UI/UX', en: 'Web Design · UI/UX' },
    desc: {
      it: 'Sito web interattivo per fan con esperienza di acquisto biglietti fluida e piacevole.',
      en: 'Interactive website for fans, with a smooth and enjoyable ticket-buying experience.'
    },
    story: {
      it: ['Sito per avvisare del tour della band, con vendita di biglietti e merch.'],
      en: ['A website announcing the band’s tour, with ticket and merch sales.']
    },
    discipline: { it: 'Web design · UI/UX', en: 'Web design · UI/UX' },
    deliverables: {
      it: ['Sitemap', 'Wireframe', 'UI design', 'Ticketing', 'Shop merch'],
      en: ['Sitemap', 'Wireframes', 'UI design', 'Ticketing', 'Merch shop']
    },
    cover: img('concerto', 'cover'),
    sections: [
      { title: { it: 'Architettura dell\'informazione', en: 'Information architecture' }, rows: [{ items: [{ src: img('concerto', 1), pad: true }], narrow: true }] },
      { title: { it: 'Wireframe', en: 'Wireframes' }, rows: [{ items: [img('concerto', 2)], narrow: true }] },
      { title: { it: 'UI design', en: 'UI design' }, rows: [{ items: [img('concerto', 3)], narrow: true }] }
    ]
  },
  {
    id: 'vini',
    type: 'case',
    featured: 6,
    title: 'Cantina Vinicola',
    kicker: { it: 'Sito vetrina', en: 'Showcase website' },
    cats: ['web', 'brand'],
    tags: { it: 'Web Design · Brand Identity', en: 'Web Design · Brand Identity' },
    desc: {
      it: 'Sito vetrina per cantina vinicola con naming unico e identità visiva originale.',
      en: 'Showcase website for a winery, with a unique name and an original visual identity.'
    },
    story: {
      it: ['Sito vetrina pensato per far conoscere i vini della cantina: presenta i prodotti e racconta l’identità del marchio, senza vendita online.'],
      en: ['A showcase website designed to introduce the winery’s wines: it presents the products and tells the brand’s story, without online sales.']
    },
    discipline: { it: 'Web design · Naming', en: 'Web design · Naming' },
    deliverables: {
      it: ['Naming', 'Identità visiva', 'Wireframe', 'UI design'],
      en: ['Naming', 'Visual identity', 'Wireframes', 'UI design']
    },
    cover: img('vini', 'cover'),
    sections: [
      { title: { it: 'Wireframe', en: 'Wireframes' }, rows: [{ items: [img('vini', 1)], narrow: true }] },
      { title: { it: 'UI design', en: 'UI design' }, rows: [{ items: [img('vini', 2)], narrow: true }] }
    ]
  },
  {
    id: 'dargento-bike', type: 'case', title: "D'argento Bike", cats: ['web'],
    kicker: { it: 'Un lampo nel buio', en: 'A flash in the dark' },
    tags: { it: 'E-Commerce · One Page', en: 'E-Commerce · One Page' },
    desc: { it: 'E-commerce one page per negozio specializzato in biciclette elettriche.', en: 'One-page e-commerce for a store specialising in e-bikes.' },
    story: {
      it: ['Sito per la vendita e la sponsorizzazione di biciclette elettriche.'],
      en: ['A website for selling and promoting e-bikes.']
    },
    discipline: { it: 'Web design · E-commerce', en: 'Web design · E-commerce' },
    deliverables: { it: ['Wireframe', 'UI desktop e mobile'], en: ['Wireframes', 'Desktop & mobile UI'] },
    cover: img('dargento-bike', 'cover'),
    sections: [
      { title: { it: 'Wireframe e UI design', en: 'Wireframes & UI design' }, rows: [{ items: [img('dargento-bike', 2)], narrow: true }] }
    ]
  },
  {
    id: 'pack-etichette', type: 'case', section: 'pack3d',
    includes: ['Review', 'Melis', 'ZipEatz', 'Unlucky', 'Di Riso', 'Vitaelis'],   /* raccolta: progetti mostrati nella card */ title: { it: 'Pack & Etichette', en: 'Pack & Labels' }, cats: ['packaging'],
    kicker: { it: 'Fustelle ed esecutivi di stampa', en: 'Dielines and print-ready artwork' },
    tags: { it: 'Packaging · Label Design', en: 'Packaging · Label Design' },
    desc: {
      it: 'Packaging e label design come sistema coordinato: tipografia, palette cromatica e gerarchia visiva integrati con vincoli tecnici di stampa (offset, serigrafia, rifiniture UV) e normative di etichettatura.',
      en: 'Packaging and label design as a coordinated system: typography, colour palette and visual hierarchy integrated with technical print constraints (offset, screen printing, UV finishes) and labelling regulations.'
    },
    discipline: { it: 'Packaging · Label design', en: 'Packaging · Label design' },
    deliverables: { it: ['Fustelle', 'Etichette', 'Esecutivi di stampa'], en: ['Dielines', 'Labels', 'Print-ready artwork'] },
    cover: img('pack-etichette', 5),
    sections: [
      { title: { it: 'Fustelle', en: 'Dielines' }, grid: true, rows: [
        { label: { it: 'Review', en: 'Review' } },
        [img('pack-etichette', 4), img('pack-etichette', 5), img('pack-etichette', 6)],
        { label: { it: 'Melis — Interno', en: 'Melis — Inside' } },
        [img('melis', 'pack1'), img('melis', 'pack2')],
        { label: { it: 'Melis — Esterno', en: 'Melis — Outside' } },
        [img('melis', 'pack3'), img('melis', 'pack4')],
        { label: { it: 'ZipEatz', en: 'ZipEatz' } },
        [img('pack-etichette', 2), img('pack-etichette', 3), img('pack-etichette', 10)],
        { label: { it: 'Unlucky', en: 'Unlucky' } },
        [img('gioco-da-tavolo', 'pack2'), img('gioco-da-tavolo', 'pack1')]
      ] },
      { title: { it: 'Etichette', en: 'Labels' }, grid: true, rows: [
        { label: { it: 'Risottami', en: 'Risottami' } },
        [img('pack-etichette', 7)],
        { label: { it: 'Vitaelis', en: 'Vitaelis' } },
        [img('pack-etichette', 8), img('pack-etichette', 9)]
      ] }
    ]
  },
  {
    id: 'render3d', type: 'case', section: 'pack3d',
    includes: ['Vitaelis', 'Review', 'ZipEatz', 'Orso Sobrio', 'Unlucky'], title: 'Render 3D', cats: ['3d'],
    kicker: { it: 'Blender · Adobe Dimension', en: 'Blender · Adobe Dimension' },
    tags: { it: '3D · Rendering', en: '3D · Rendering' },
    desc: {
      it: 'Modellazione e rendering 3D in Blender e Adobe Dimension con materiali PBR, illuminazione HDRI e color grading finale. Mockup fotorealistici per presentazioni cliente e campagne editoriali.',
      en: '3D modelling and rendering in Blender and Adobe Dimension with PBR materials, HDRI lighting and final colour grading. Photorealistic mockups for client presentations and editorial campaigns.'
    },
    tools: ['Blender', 'Adobe Dimension'],
    discipline: { it: '3D · Rendering', en: '3D · Rendering' },
    deliverables: {
      it: ['Modellazione 3D', 'Materiali PBR', 'Illuminazione HDRI', 'Color grading'],
      en: ['3D modelling', 'PBR materials', 'HDRI lighting', 'Colour grading']
    },
    cover: img('gioco-da-tavolo', 'render1'),
    sections: [
      { title: { it: 'Vitaelis', en: 'Vitaelis' }, grid: 'cover', rows: [[img('vitaelis', 'render3'), img('render3d', 2), img('render3d', 10)]] },
      { title: { it: 'Review', en: 'Review' }, grid: 'cover', rows: [[img('render3d', '3-ritaglio'), img('render3d', 4), img('render3d', 5)]] },
      { title: { it: 'ZipEatz', en: 'ZipEatz' }, grid: 'cover', rows: [[img('render3d', 6)]] },
      { title: { it: 'Orso Sobrio', en: 'Orso Sobrio' }, grid: 'cover', rows: [[img('render3d', 7), img('render3d', 8), img('render3d', 9)]] },
      { title: { it: 'Unlucky', en: 'Unlucky' }, grid: 'cover', rows: [[img('gioco-da-tavolo', 'render1'), img('gioco-da-tavolo', 'render2'), img('gioco-da-tavolo', 'render3')]] }
    ]
  }
];

/* Progetti accademici (PDF) */
const ACADEMIC = [
  { title: 'Brand Book Review',               label: { it: 'Brand Identity', en: 'Brand Identity' },        cover: 'assets/accademici/cover-review.jpg',      pdf: 'assets/accademici/brand-book-review.pdf' },
  { title: 'Brand Book Melis',                label: { it: 'Brand Identity', en: 'Brand Identity' },        cover: 'assets/img/melis/copertina.jpg',       pdf: 'assets/accademici/brand-book-melis.pdf' },
  { title: 'Brand Book Vitaelis',             label: { it: 'Brand Identity', en: 'Brand Identity' },        cover: 'assets/accademici/cover-vitaelis.jpg',    pdf: 'assets/accademici/brand-book-vitaelis.pdf' },
  { title: 'Campagna Teaser Baci Perugina',   label: { it: 'Campagna Pubblicitaria', en: 'Advertising Campaign' }, cover: 'assets/accademici/cover-baci.jpg',  pdf: 'assets/accademici/campagna-baci-perugina.pdf' },
  { title: 'Campagna Teaser Topolino Rock',   label: { it: 'Campagna Pubblicitaria', en: 'Advertising Campaign' }, cover: 'assets/accademici/cover-topolino.jpg', pdf: 'assets/accademici/campagna-topolino-rock.pdf' },
  { title: 'Creazione Naming Pizzeria',       label: { it: 'Brand Naming', en: 'Brand Naming' },            cover: 'assets/accademici/cover-pizzeria.jpg',    pdf: 'assets/accademici/naming-pizzeria.pdf' },
  { title: 'Restyling Logo Acqua&Sapone',     label: { it: 'Logo Restyling', en: 'Logo Restyling' },        cover: 'assets/accademici/cover-acquasapone.jpg', pdf: 'assets/accademici/restyling-acqua-sapone.pdf' }
];

/* Dimensioni immagini [larghezza, altezza] — evitano salti di layout */
const DIMS = {
  "assets/img/anymalia/1.jpg":[842,189],
  "assets/img/anymalia/10.jpg":[1400,990],
  "assets/img/anymalia/11.jpg":[1400,990],
  "assets/img/anymalia/12.jpg":[1400,990],
  "assets/img/anymalia/2.jpg":[1400,788],
  "assets/img/anymalia/3.jpg":[1400,990],
  "assets/img/anymalia/4.jpg":[1400,990],
  "assets/img/anymalia/5.jpg":[1400,990],
  "assets/img/anymalia/6.jpg":[1400,990],
  "assets/img/anymalia/7.jpg":[1400,990],
  "assets/img/anymalia/8.jpg":[1400,990],
  "assets/img/anymalia/9.jpg":[1400,990],
  "assets/img/anymalia/cover.jpg":[1400,788],
  "assets/img/avis/1.jpg":[1400,1400],
  "assets/img/avis/10.jpg":[1400,933],
  "assets/img/avis/11.jpg":[1400,933],
  "assets/img/avis/12.jpg":[1400,933],
  "assets/img/avis/13.jpg":[1400,788],
  "assets/img/avis/2.jpg":[1400,1400],
  "assets/img/avis/3.jpg":[1400,933],
  "assets/img/avis/4.jpg":[1400,933],
  "assets/img/avis/5.jpg":[501,501],
  "assets/img/avis/6.jpg":[1400,501],
  "assets/img/avis/7.jpg":[1400,1225],
  "assets/img/avis/8.jpg":[1400,933],
  "assets/img/avis/9.jpg":[1400,933],
  "assets/img/avis/cover.jpg":[1024,768],
  "assets/img/concerto/1.jpg":[906,387],
  "assets/img/concerto/2.jpg":[1400,468],
  "assets/img/concerto/3.jpg":[1400,524],
  "assets/img/concerto/cover.jpg":[1200,900],
  "assets/img/dargento-bike/2.jpg":[976,792],
  "assets/img/dargento-bike/cover.jpg":[1200,805],
  "assets/img/diriso/1.jpg":[1400,990],
  "assets/img/diriso/10.jpg":[1400,933],
  "assets/img/diriso/11.jpg":[1400,933],
  "assets/img/diriso/2.jpg":[1400,824],
  "assets/img/diriso/3.jpg":[1400,1220],
  "assets/img/diriso/4.jpg":[1400,1400],
  "assets/img/diriso/6.jpg":[1400,1050],
  "assets/img/diriso/7.jpg":[1400,1050],
  "assets/img/diriso/8.jpg":[1400,990],
  "assets/img/diriso/9.jpg":[1400,933],
  "assets/img/diriso/cover.jpg":[1400,990],
  "assets/img/epilogo/1.jpg":[518,147],
  "assets/img/epilogo/10.jpg":[1400,504],
  "assets/img/epilogo/11.jpg":[961,242],
  "assets/img/epilogo/2.jpg":[888,398],
  "assets/img/epilogo/3.jpg":[1400,544],
  "assets/img/epilogo/4.jpg":[1330,615],
  "assets/img/epilogo/5.jpg":[930,206],
  "assets/img/epilogo/6.jpg":[1157,592],
  "assets/img/epilogo/7.jpg":[1400,482],
  "assets/img/epilogo/8.jpg":[761,192],
  "assets/img/epilogo/9.jpg":[1400,693],
  "assets/img/epilogo/cover.jpg":[1200,840],
  "assets/img/manavi/1.jpg":[1400,788],
  "assets/img/manavi/10.jpg":[1400,788],
  "assets/img/manavi/11.jpg":[1400,788],
  "assets/img/manavi/12.jpg":[1400,788],
  "assets/img/manavi/13.jpg":[1400,788],
  "assets/img/manavi/14.jpg":[1400,788],
  "assets/img/manavi/15.jpg":[1400,788],
  "assets/img/manavi/16.jpg":[1400,788],
  "assets/img/manavi/17.jpg":[1400,1050],
  "assets/img/manavi/2.jpg":[1400,933],
  "assets/img/manavi/3.jpg":[1400,990],
  "assets/img/manavi/4.jpg":[1400,788],
  "assets/img/manavi/5.jpg":[1400,788],
  "assets/img/manavi/6.jpg":[1400,788],
  "assets/img/manavi/7.jpg":[1400,788],
  "assets/img/manavi/8.jpg":[1400,788],
  "assets/img/manavi/9.jpg":[1400,788],
  "assets/img/manavi/cover.jpg":[1400,1000],
  "assets/img/orsosobrio/1.jpg":[1400,990],
  "assets/img/orsosobrio/2.jpg":[1400,933],
  "assets/img/orsosobrio/3.jpg":[1400,788],
  "assets/img/orsosobrio/4.jpg":[1400,788],
  "assets/img/orsosobrio/5.jpg":[1400,933],
  "assets/img/orsosobrio/6.jpg":[1400,933],
  "assets/img/orsosobrio/7.jpg":[1400,920],
  "assets/img/orsosobrio/cover.jpg":[1400,933],
  "assets/img/pack-etichette/1.jpg":[1400,1119],
  "assets/img/pack-etichette/2.jpg":[1400,1119],
  "assets/img/pack-etichette/3.jpg":[1400,1119],
  "assets/img/pack-etichette/4.jpg":[1400,1119],
  "assets/img/pack-etichette/5.jpg":[1400,1119],
  "assets/img/pack-etichette/6.jpg":[1400,1119],
  "assets/img/pack-etichette/7.jpg":[1400,1119],
  "assets/img/pack-etichette/8.jpg":[1400,1119],
  "assets/img/pack-etichette/9.jpg":[1400,1119],
  "assets/img/pack-etichette/cover.jpg":[1400,1119],
  "assets/img/render3d/1.jpg":[1400,1119],
  "assets/img/render3d/10.jpg":[1400,1119],
  "assets/img/render3d/2.jpg":[1400,1119],
  "assets/img/render3d/3.jpg":[1400,826],
  "assets/img/render3d/4.jpg":[1400,1119],
  "assets/img/render3d/5.jpg":[1400,1119],
  "assets/img/render3d/6.jpg":[1400,1119],
  "assets/img/render3d/7.jpg":[1400,1119],
  "assets/img/render3d/8.jpg":[1400,1119],
  "assets/img/render3d/9.jpg":[1400,1119],
  "assets/img/render3d/cover.jpg":[1400,1119],
  "assets/img/review/1.jpg":[1324,594],
  "assets/img/review/10.jpg":[1400,920],
  "assets/img/review/11.jpg":[1400,933],
  "assets/img/review/12.jpg":[1400,933],
  "assets/img/review/13.jpg":[1400,933],
  "assets/img/review/14.jpg":[1400,738],
  "assets/img/review/15.jpg":[1400,738],
  "assets/img/review/2.jpg":[769,546],
  "assets/img/review/3.jpg":[1400,933],
  "assets/img/review/4.jpg":[1400,1307],
  "assets/img/review/5.jpg":[1400,980],
  "assets/img/review/6.jpg":[1400,788],
  "assets/img/review/7.jpg":[1400,933],
  "assets/img/review/8.jpg":[1400,933],
  "assets/img/review/9.jpg":[1400,933],
  "assets/img/review/cover.jpg":[1400,933],
  "assets/img/vini/1.jpg":[1400,703],
  "assets/img/vini/2.jpg":[1322,827],
  "assets/img/vini/cover.jpg":[1200,900],
  "assets/img/vitaelis/1.jpg":[1105,380],
  "assets/img/vitaelis/10.jpg":[1400,506],
  "assets/img/vitaelis/11.jpg":[1400,1050],
  "assets/img/vitaelis/12.jpg":[1400,933],
  "assets/img/vitaelis/13.jpg":[1400,933],
  "assets/img/vitaelis/14.jpg":[1400,1050],
  "assets/img/vitaelis/15.jpg":[1400,933],
  "assets/img/vitaelis/16.jpg":[1213,792],
  "assets/img/vitaelis/17.jpg":[1213,857],
  "assets/img/vitaelis/18.jpg":[1185,830],
  "assets/img/vitaelis/2.jpg":[980,1400],
  "assets/img/vitaelis/3.jpg":[1400,990],
  "assets/img/vitaelis/4.jpg":[921,500],
  "assets/img/vitaelis/5.jpg":[1400,824],
  "assets/img/vitaelis/6.jpg":[557,603],
  "assets/img/vitaelis/7.jpg":[1002,562],
  "assets/img/vitaelis/8.jpg":[927,541],
  "assets/img/vitaelis/9.jpg":[918,517],
  "assets/img/vitaelis/cover.jpg":[1042,528],
  "assets/img/zipeatz/1.jpg":[1181,827],
  "assets/img/zipeatz/2.jpg":[1400,788],
  "assets/img/zipeatz/3.jpg":[1400,977],
  "assets/img/zipeatz/4.jpg":[797,620],
  "assets/img/zipeatz/5.jpg":[1400,1050],
  "assets/img/zipeatz/6.jpg":[1400,933],
  "assets/img/zipeatz/7.jpg":[1400,1400],
  "assets/img/zipeatz/8.jpg":[1400,837],
  "assets/img/zipeatz/9.jpg":[1400,933],
  "assets/img/zipeatz/cover.jpg":[1200,821],
  "assets/accademici/cover-acquasapone.jpg":[1200,675],
  "assets/accademici/cover-baci.jpg":[1042,582],
  "assets/accademici/cover-pizzeria.jpg":[800,1200],
  "assets/accademici/cover-review.jpg":[1200,800],
  "assets/accademici/cover-topolino.jpg":[1043,583],
  "assets/accademici/cover-vitaelis.jpg":[1200,800],
  "assets/img/alexia.jpg":[849,1200],
  "assets/img/anymalia/copertina.jpg":[2400,1540],
  "assets/img/vitaelis/copertina.jpg":[2400,1335],
  "assets/img/pack-etichette/10.jpg":[2400,2561],
  "assets/img/gioco-da-tavolo/fb.jpg":[1217,672],
  "assets/img/gioco-da-tavolo/flyer.jpg":[1191,641],
  "assets/img/gioco-da-tavolo/ig.jpg":[1016,676],
  "assets/img/gioco-da-tavolo/igcarosello.jpg":[1215,663],
  "assets/img/gioco-da-tavolo/logo.jpg":[515,152],
  "assets/img/gioco-da-tavolo/magliette.jpg":[1217,670],
  "assets/img/gioco-da-tavolo/pack1.jpg":[816,787],
  "assets/img/gioco-da-tavolo/pack2.jpg":[2000,1744],
  "assets/img/gioco-da-tavolo/personaggi.jpg":[556,622],
  "assets/img/gioco-da-tavolo/render1.jpg":[1217,683],
  "assets/img/gioco-da-tavolo/render2.jpg":[612,591],
  "assets/img/gioco-da-tavolo/render3.jpg":[651,641],
  "assets/img/gioco-da-tavolo/spille.jpg":[2000,1333],
  "assets/img/gioco-da-tavolo/stickers1.jpg":[2000,1333],
  "assets/img/gioco-da-tavolo/stickers2.jpg":[2000,1333],
  "assets/img/melis/copertina.jpg":[2000,1333],
  "assets/img/melis/fb.jpg":[1002,827],
  "assets/img/melis/ig.jpg":[1505,843],
  "assets/img/melis/igcarosello.jpg":[1417,675],
  "assets/img/melis/insegna.jpg":[2000,1500],
  "assets/img/melis/landing1.jpg":[472,880],
  "assets/img/melis/landing2.jpg":[1895,902],
  "assets/img/melis/logo.jpg":[571,487],
  "assets/img/melis/manifesto.jpg":[1525,848],
  "assets/img/melis/pack1.jpg":[1212,857],
  "assets/img/melis/pack2.jpg":[1213,867],
  "assets/img/melis/pack3.jpg":[606,860],
  "assets/img/melis/pack4.jpg":[606,857],
  "assets/img/melis/poster.jpg":[1260,1800],
  "assets/img/melis/render1.jpg":[1104,976],
  "assets/img/melis/render2.jpg":[1019,1007],
  "assets/img/melis/stationery.jpg":[2000,1500],
  "assets/accademici/cover-melis.jpg":[1200,800],
  "assets/img/zipeatz/copertina.jpg":[960,720],
  "assets/img/melis/landing3.jpg":[1902,831],
  "assets/img/melis/landing4.jpg":[1897,827],
  "assets/img/melis/landing5.jpg":[1900,832],
  "assets/img/melis/landing6.jpg":[1897,796],
  "assets/img/melis/landing7.jpg":[1897,822],
  "assets/img/melis/landing8.jpg":[1897,820],
  "assets/img/melis/landing9.jpg":[1897,836],
  "assets/img/melis/landing10.jpg":[1897,311],
  "assets/img/review/logo.jpg":[1327,531],
  "assets/img/review/monogramma.jpg":[666,344],
  "assets/img/render3d/3-ritaglio.jpg":[1392,779],
  "assets/img/vitaelis/render3.jpg":[2000,1119]};
