<template>
  <div class="bg-accent-leafGreen text-dark leading-loose p-2 md:p-4 grow">
    <h1 class="text-xl md:text-3xl">{{ name }}</h1>
    <p class="text-xs md:text-base">#{{ id }}, Generation {{ generation }}</p>
    <p class="text-xs md:text-base">{{ species }}</p>
    <p class="text-xs md:text-base">Type: {{ type }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, default: '001' },
  name: { type: String, default: 'Bulbasaur' },
  generation: { type: [String, Number], default: 1 },
  species: { type: String, default: 'Seed Pokémon' },
  type: { type: String, default: 'Grass - Poison' }
});
</script>