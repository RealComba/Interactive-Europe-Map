<script setup>
import Map from './components/Map.vue'
import Sidebar from './components/Sidebar.vue'

</script>

<template>
<div class="flex flex-col items-center justify-center container">
    <div class="flex flex-row w-full gap-8 items-center box ">
        <div class="side flex flex-row w-full h-full items-center justify-center m-10">
            <Sidebar></Sidebar>
        </div>
        <div class="map flex flex-row w-full h-full items-center justify-center">
            <Map></Map>
        </div>
    </div>
</div>

</template>

<style scoped>

</style>
