<template>
  <div v-if="pokemon" class="bg-accent-leafGreen text-dark leading-loose p-2 md:p-4 grow">
    <h1 class="text-xl md:text-3xl capitalize">{{ pokemon.name }}</h1>
    <p class="text-xs md:text-base">#{{ String(id).padStart(3, '0') }}, Generation {{ generation }}</p>
    <p class="text-xs md:text-base">{{ speciesName }}</p>
    <p class="text-xs md:text-base">Type: {{ types }}</p>
  </div>
  <div v-else class="p-4 text-dark italic">
    Loading stats...
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  id: { type: [String, Number], default: 1 }
});

const pokemon = ref(null);
const generation = ref('');
const speciesName = ref('');
const types = ref('');

const fetchPokemonData = async (pokemonId) => {
  if (!pokemonId) return;
  
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await res.json();
    pokemon.value = data;
    types.value = data.types.map(t => t.type.name).join(' - ');

    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
    const speciesData = await speciesRes.json();
    
    generation.value = speciesData.generation.name.split('-')[1].toUpperCase();
    const genus = speciesData.genera.find(g => g.language.name === 'en');
    speciesName.value = genus ? genus.genus : '';

  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }
};

watch(() => props.id, (newId) => {
  fetchPokemonData(newId);
}, { immediate: true });
</script>