import { useDataStore } from '../stores/store'
import { computed } from 'vue'

export function useStatoAttivo () {
    const store = useDataStore()
    const listaServizi = computed (() => store.listaServizi) //lista servizi 
    const statoAttivo = computed (() => store.statoSelezionato) //stato attivo in mappa

    const dataStato = computed(() => { //filtra i servizi ritornando soltanto quelli che contengono lo stato attivo
        const serviziFiltrati = listaServizi.value 
        .filter(servizio => servizio.countries.find(c => c.id === statoAttivo.value.id)) 
        .map(servizio => servizio.nome)
        return {
            serviziFiltrati: serviziFiltrati.length > 0 
            ? serviziFiltrati.join(', ')
            : 'Nessun servizio trovato'
        }
    })
    return dataStato
}

