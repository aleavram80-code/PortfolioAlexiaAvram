# Portfolio Alexia Avram — versione 2026

Sito statico (HTML, CSS, JS senza dipendenze), pronto per GitHub Pages.

## Struttura
- `index.html` — home: hero, 6 case study in evidenza, about, competenze, archivio, contatti
- `about.html` — profilo, lingue, competenze, esperienze e formazione
- `progetti.html` — archivio completo con filtri + progetti accademici (PDF)
- `progetto.html?p=<id>` — pagina case study, generata dai dati
- `css/style.css` — tutto lo stile (i colori e i font sono nei token in cima al file)
- `js/data.js` — **contenuti dei progetti** (titoli, descrizioni IT/EN, immagini)
- `js/i18n.js` — testi dell'interfaccia in italiano e inglese
- `js/main.js` — effetti (loader, cursore, grana, transizioni), lightbox e rendering

## Modifiche frequenti
- **Aggiungere un progetto**: cartella in `assets/img/<id>/` + un oggetto in `PROJECTS` (`js/data.js`).
  `type: 'case'` crea una pagina dedicata, `type: 'gallery'` apre la galleria.
  `featured: 1`…`6` lo mostra in home (il numero è la posizione).
- **Cambiare un testo**: cerca la chiave in `js/i18n.js` e modifica la versione `it`.
- **Lingua**: il sito è solo in italiano (i testi inglesi in `i18n.js`/`data.js` restano ma non vengono usati).
- **Galleria diretta**: `progetti.html#vitaelis` apre subito la galleria di quel progetto.

## Pubblicazione
- Carica tutto **tranne** la cartella `_non-pubblicare/` (materiale di lavoro, già esclusa nel `.gitignore`).
- Anteprima dei link: immagine `assets/og-image.jpg`. Quando conosci l'indirizzo del sito, nei 4 file HTML
  sostituisci `content="assets/og-image.jpg"` con l'indirizzo completo (es. `https://tuosito.it/assets/og-image.jpg`).
- Favicon: `assets/icons/`.
- Schede progetto: campi facoltativi `year` (anno), `role` (ruolo) e `tools` (strumenti) in `js/data.js`.
