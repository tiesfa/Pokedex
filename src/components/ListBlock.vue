<template>
  <div class="text-white text-xs md:text-base bg-dark p-2 md:p-4 leading-loose h-36 md:h-[38rem] overflow-y-auto">
    <ul v-if="pokemonList.results">
      <li v-for="pokemon in pokemonList.results" :key="extractId(pokemon.url)">
        <button>#{{ extractId(pokemon.url) }} - {{ pokemon.name.toUpperCase() }}</button>
      </li>
    </ul>
    <p v-else>Loading Pokedex...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pokemonList = ref([]);

const activePokemon = ref(null);
const extractId = (url) => url.split('/')[6];

onMounted(async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const data = await response.json();
    pokemonList.value = data;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
  }
});

function setPokemon (id) {
  activePokemon.value = id;
}
</script>