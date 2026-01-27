<template>
  <div class="text-white text-xs md:text-base bg-dark p-2 md:p-4 leading-loose h-36 md:h-[38rem] overflow-y-auto">
    <ul v-if="pokemonList.results">
      <li v-for="pokemon in pokemonList.results" :key="extractId(pokemon.url)">
        <button 
          @click="setPokemon(extractId(pokemon.url))"
          class="w-full text-left hover:text-accent-pastel transition-colors"
          :class="{ 'text-accent-candyRed font-bold': activePokemon === extractId(pokemon.url) }"
        >
          #{{ extractId(pokemon.url) }} - {{ pokemon.name.toUpperCase() }}
        </button>
      </li>
    </ul>
    <p v-else>Loading Pokedex...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pokemonList = ref([]);
const activePokemon = ref(null);
const emit = defineEmits(['pokemon-selected']);
const extractId = (url) => url.split('/')[6];

onMounted(async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const data = await response.json();
    pokemonList.value = data;
    
    // Select first Pokémon on load
    if (data.results.length > 0) {
      setPokemon(extractId(data.results[0].url));
    }
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
  }
});

function setPokemon(id) {
  activePokemon.value = id;
  emit('pokemon-selected', id);
  console.log('Selected Pokémon ID:', id);
}
</script>