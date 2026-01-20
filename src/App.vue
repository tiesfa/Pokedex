<template>
  <main v-cloak class="container font-press-start">
    <div class="text-xl md:text-3xl mt-4 lg:mt-8 text-light uppercase tracking-wider">
      <h1>Pokedex</h1>
    </div>
    <div class="grid md:grid-cols-2 md:grid-flow-col gap-4 lg:gap-8 py-4 md:py-8">
      <div class="md:col-span-1 flex flex-col gap-4 lg:gap-8">
        <DisplayBlock />
        <InfoBlock />
      </div>
      <div class="md:col-span-2 flex flex-col gap-4 lg:gap-8">
        <SelectorBlock />
        <ListBlock />
        <NavBlock />
      </div>
    </div>
  </main>
</template>

<script>
import DisplayBlock from './components/DisplayBlock.vue';
import InfoBlock from './components/InfoBlock.vue';
import SelectorBlock from './components/SelectorBlock.vue';
import ListBlock from './components/ListBlock.vue';
import NavBlock from './components/NavBlock.vue';

export default {
  components: {
    DisplayBlock, InfoBlock, SelectorBlock, ListBlock, NavBlock,
  },
};
</script>