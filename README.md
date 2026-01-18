# Mappa Iterativa

Web app che mostra un elenco di servizi filtrabili in base allo stato attivo e viceversa.

---

## Struttura del progetto

### Componenti principali
- **App.vue**
- **Map.vue**
- **Sidebar.vue**

### Composables
- **useStatoAttivo.js**  
  Ritorna l’elenco dei servizi in base allo stato selezionato.

- **useServizioAttivo.js**  
  Ritorna i dati del servizio attivo in quel momento.

- **useZoom.js**  
  Gestisce lo zoom della mappa tramite la libreria `svgPanZoom`.

### Store
- **store.js**  
  Contiene:
  - il JSON dei servizi attivi
  - il servizio attivo
  - lo stato attivo corrente  
  Include inoltre la logica per aggiungere o rimuovere uno stato.

### Assets
- **servizi.json**  
  Contiene la lista dei servizi attivi, con:
  - ID e nome del servizio
  - array di nazioni (nome e ID)

- **statiattivabili.json**  
  Contiene la lista degli ID degli stati da illuminare all’avvio e ad ogni reset della mappa.

---

## Come usare la mappa

- Inserire nuovi servizi nel file `servizi.json`, specificando:
  - ID univoco
  - nome del servizio
  - `countries` come oggetto contenente ID e nome dello stato

⚠️ **È fondamentale che l’ID dello stato corrisponda a quello presente nel file SVG**  
(puoi consultare `/src/assets/europe.svg`).

- Se non già presente, inserire l’ID dello stato anche nel file `statiattivabili.json`.

⚠️ **Anche in questo caso l’ID deve coincidere con quello originale dell’SVG**.

---

## Funzionalità della mappa

- È possibile aggiungere o rimuovere stati direttamente dalla mappa.
- Selezionando un servizio, apparirà l’opzione per aggiungere o rimuovere uno stato.
- L’utente può cliccare sugli stati disponibili direttamente sulla mappa.
