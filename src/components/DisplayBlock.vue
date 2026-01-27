<template>
  <div class="bg-light rounded-bl-3xl p-8 md:p-16">
    <div v-if="pokemon" class="bg-accent-pastel">
      <img 
        class="w-full" 
        :src="pokemon.sprites.other['official-artwork'].front_default" 
        :alt="pokemon.name"
      />
    </div>
    <div v-else class="flex justify-center items-center h-48">
      <p class="text-dark animate-pulse">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps(['id']);
const pokemon = ref(null);

const fetchPokemon = async (pokemonId) => {
  if (!pokemonId) return;
  
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await response.json();
    pokemon.value = data;
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }
};

watch(() => props.id, (newId) => {
  fetchPokemon(newId);
}, { immediate: true });
</script>