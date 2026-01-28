<template>
  <main v-cloak class="container font-press-start">
    <div class="text-xl md:text-3xl mt-4 lg:mt-8 text-light uppercase tracking-wider">
      <h1>Pokedex</h1>
    </div>
    
    <div class="grid md:grid-cols-2 md:grid-flow-col gap-4 lg:gap-8 py-4 md:py-8">
      <div class="md:col-span-1 flex flex-col gap-4 lg:gap-8">
        <DisplayBlock :id="selectedId" :is-shiny="isShiny" />
        <InfoBlock :id="selectedId" />
      </div>
      
      <div class="md:col-span-2 flex flex-col gap-4 lg:gap-8">
        <SelectorBlock @change-generation="(val) => currentGenSettings = val" />
        <ListBlock :gen-settings="currentGenSettings" @pokemon-selected="updateId" />
        <NavBlock :current-id="selectedId" @toggle-shiny="handleShinyToggle" @select="updateId" @search="updateId" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import DisplayBlock from './components/DisplayBlock.vue';
import InfoBlock from './components/InfoBlock.vue';
import SelectorBlock from './components/SelectorBlock.vue';
import ListBlock from './components/ListBlock.vue';
import NavBlock from './components/NavBlock.vue';

const currentGenSettings = ref({ offset: 0, limit: 151 });
const selectedId = ref(1);
const isShiny = ref(false);

const updateId = (id) => {
  selectedId.value = id;
};

const handleShinyToggle = (val) => {
  isShiny.value = val;
};
</script>