import { useDataStore } from '../stores/store'
import { computed } from "vue"

export function useServizioAttivo() {
    const store = useDataStore()

    const servizioAttivo = computed (() => store.servizioAttivo)
    const idStati = computed (() => servizioAttivo.value?.countries.map(c => c.id) ?? []) 
    const listaNomeStati = computed (() => servizioAttivo.value?.countries.map(c => c.name).join(', \n') ?? [])
    const nomeServizio = computed (() => servizioAttivo.value?.nome ?? [])

    return { 
        servizioAttivo,
        idStati,  
        listaNomeStati,
        nomeServizio,
    }

}

