<template>
  <main class="container font-press-start">
    <div class="grid md:grid-cols-2 md:grid-rows-3 gap-4 auto-rows-min md:grid-flow-col py-4 md:min-h-screen">
      <div class="text-3xl text-light uppercase tracking-wider md:col-span-1 md:row-span-1">
        <h1>Pokedex</h1>
      </div>
      <div class="md:col-span-1 md:row-span-1">
        <DisplayBlock />
      </div>
      <div class="md:col-span-1 md:row-span-1">
        <InfoBlock />
      </div>
      <div class="md:col-span-2 md:row-span-3">
        <NavBlock />
      </div>
    </div>
  </main>
</template>

<script>
import DisplayBlock from './components/DisplayBlock.vue';
import InfoBlock from './components/InfoBlock.vue';
import NavBlock from './components/NavBlock.vue';

export default {
  components: {
    DisplayBlock, InfoBlock, NavBlock,
  },
};
</script>