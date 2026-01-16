<script setup>
import { ref, watch, computed } from 'vue'
import { useDataStore } from '../stores/store'

const servizi = computed (() => store.listaServizi)
const serviziIlluminati = ref([])
const store = useDataStore()

watch (() => store.statoSelezionato, () => {
    illuminaServizi()
})

function servizioSelezionato (servizio){
    serviziIlluminati.value = []
    store.dataServizio(servizio)
    console.log(servizio)
}

//colori e dati card
function illuminaServizi () {
    serviziIlluminati.value = [] //ogni volta che premo un nuovo stato resetta l'array che illumina le card

    if (!store.statoSelezionato) { //check se ho premuto uno stato
        return
    }
    
    //per ogni servizio va ad aggiungere i servizi che contengono lo stato selezionato
    servizi.value.forEach(servizio => { 
        console.log(store.statoSelezionato.id)
        if (servizio.countries.some(c => c.id == store.statoSelezionato.id)) {
            serviziIlluminati.value.push(servizio.id)
            console.log(serviziIlluminati)
        }
    })
    store.servizioAttivo = null
}
 
const colorCard = (servizioId) => {
    if (servizioId === store.servizioAttivo?.id ) {
        console.log('verissimo')
        return 'bg-green-200'
    }
    else if (serviziIlluminati.value.includes(servizioId)) {
        return 'bg-blue-200'
    }  else {
        return 'bg-gray-50'
    }  
} 

const getNomiStati = computed(() => (id) => {
   const servizio =  servizi.value.find(s => s.id === id)
    return servizio.countries.map(c => c.name).join (', ')
})

const getNumeroStati = computed (() => (id) => {
    const servizio =  servizi.value.find(s => s.id === id)
    if (servizio.countries.length > 8) {
        return servizio.countries.length
    } else {
        return (`stati: ${servizio.countries.length}`)
    }
})


</script>

<template>
    <div class="flex flex-col bg-gray-200 rounded-lg w-128 h-full gap-4 items-center">
        <p class="text-xl font-bold mt-4 text-stone-900">Lista servizi</p>
        <div
            v-for="servizio in servizi" 
            :key="servizio.id"
            :class="colorCard(servizio.id)"
            class=" card w-3/4 items-center font-bold p-4 rounded hover:bg-green-400 transition-all " 
            @click="servizioSelezionato(servizio)">
            <div class=" content flex flex-row justify-between">
                <div class="flex flex-col gap-4">
                    <p class="text-stone-900">{{ servizio.nome }}</p>
                    <p class="text-stone-900 text-sm font-normal">{{ getNomiStati(servizio.id) }}</p>
                </div>
                <div class="flex flex-col gap-1  w-1/4 items-center">
                    <input 
                    type="radio" 
                    class="radiobtn rounded-full border border-slate-300 checked:border-slate-800 hover:border-slate-700 transition-all" 
                    :checked="servizio.id === store.servizioAttivo?.id">
                    <div class="mt-3 p-1 justify-center flex w-full text-sm bg-gray-300 text-stone-900 font-semibold rounded-full">
                        <p>{{ getNumeroStati(servizio.id) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>