<template>
  <div class="bg-light rounded-bl-3xl p-8 md:p-16">
    <div v-if="pokemon" class="bg-accent-pastel">
      <img 
        class="w-full" 
        :src="imageUrl" 
        :alt="pokemon.name"
      />
    </div>
    <div v-else class="flex justify-center items-center h-48">
      <p class="text-dark animate-pulse">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps(['id', 'isShiny']);
const pokemon = ref(null);

const imageUrl = computed(() => {
  if (!pokemon.value) return '';
  
  const artwork = pokemon.value.sprites.other['official-artwork'];
  return props.isShiny ? artwork.front_shiny : artwork.front_default;
});

const fetchPokemon = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    pokemon.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

watch(() => props.id, (newId) => {
  fetchPokemon(newId);
}, { immediate: true });
</script>