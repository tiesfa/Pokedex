<template>
  <main v-cloak class="container font-press-start">
    <div class="text-xl md:text-3xl mt-4 lg:mt-8 text-light uppercase tracking-wider">
      <h1>Pokedex</h1>
    </div>
    
    <div class="grid md:grid-cols-2 md:grid-flow-col gap-4 lg:gap-8 py-4 md:py-8">
      <div class="md:col-span-1 flex flex-col gap-4 lg:gap-8">
        <DisplayBlock :id="selectedId" />
        <InfoBlock :id="selectedId" />
      </div>
      
      <div class="md:col-span-2 flex flex-col gap-4 lg:gap-8">
        <SelectorBlock />
        <ListBlock @pokemon-selected="updateId" />
        <NavBlock />
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

// Reactive "State" to hold the current ID
const selectedId = ref(1);

// Function to update the ID
const updateId = (id) => {
  selectedId.value = id;
};
</script>