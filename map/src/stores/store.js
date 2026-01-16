import { defineStore  } from "pinia"
import { ref } from "vue"

export const useDataStore = defineStore('dataStati', () => {
    
    const listaServizi = ref([])
    const servizioAttivo = ref(null)
    const statoSelezionato = ref(null)

    async function caricaServizi() {
    const result = await fetch('/src/assets/servizi.json')
    listaServizi.value = await result.json()
    }

    function dataServizio(servizio) {
        servizioAttivo.value = servizio
    }

    function dataStato (stato) {
        statoSelezionato.value = stato
    }

    function aggiungiStato(id, nome) { 
        servizioAttivo.value.countries.push({ id: id, name: nome }) //aggiunge lo stato al servizio attivo
    }

    //rimuovi stato
    function rimuoviStato(statoId, statiAttivabili) {
        servizioAttivo.value.countries = servizioAttivo.value.countries.filter(c => c.id !== statoId) //crea e sostituisce un array senza quello stato
        
        const statoEsistente = listaServizi.value.some(s => s.countries.some(c => c.id === statoId)) 
        if(!statoEsistente) {
        statiAttivabili.value = statiAttivabili.value.filter(id => id !== statoId)
        }
    }

    return {
        servizioAttivo,
        statoSelezionato,
        listaServizi,
        dataStato,
        dataServizio,
        caricaServizi,
        aggiungiStato,
        rimuoviStato,
    }
})

