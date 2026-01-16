# Mappa Iterativa

una webapp che mostra un elenco di servizi filtrabili per stato attivo e viceversa 

## Struttura: 

- App.vue
- Map.vue 
- Sidebar.vue 

### Composables: 
- useStatoAttivo.js: ritorna l'elenco dei servizi sullo stato selezionato

- useServizioAttivo.js: ritorna dati utili del servizio attivo in quel momento

- useZoom.js: gestisce lo zoom grazie alla libreria svgPanZoom

### Store:

-store.js: contiene il json dei servizi attivi, il servizio, lo stato attivo in quel momento e contiene la logica per rimuovere o aggiungere uno stato

### Assets:

- servizi.json: contiene la lista di servizi attivi, con nome e id del servizio, array di nazioni per nome e per id

- statiattivabili.json: contiene la lista degli id da illuminare all'avvio e ad ogni reset della mappa

## Come Usare La Mappa

> Inserire i nuovi servizi dentro il file servizi.json, con ID univoco, nome del servizio e countries come oggetto, composto da ID dello stato e name dello stato

**Fondamentale che l'ID dello stato inserito sia uguale a quello presente nell'svg (puoi consultare /src/assets/europe.svg)**

> Successivamente, qualora non fosse presente, inserire l'id dello stato aggiunto dentro statiattivabili.json 

**Anche qui è fondamentale che l'id coincida con quello originale dell'svg**


## Feature della mappa

> è possibile aggiungere e rimuovere gli stati direttamente dalla mappa, basterà selezionare un servizio qualsiasi e apparirà l'opzione aggiungi stato o rimuovi stato, su cui sarà possibile cliccare sullo stato tra quelli disponibili in mappa

