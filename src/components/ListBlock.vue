<template>
  <div class="text-white text-xs md:text-base bg-dark p-2 md:p-4 leading-loose h-36 md:h-[38rem] overflow-scroll">
    <ul>
      <li v-for="pokemon in pokemonList.results" :key="pokemon.url.split('/')[6]">#{{ pokemon.url.split('/')[6] }} - {{ pokemon.name.toUpperCase() }}</li>
    </ul>
  </div>
</template>

<script>
  // Vue2 method
  export default {
    data() {
      return {
        pokemonList: []
      }
    },
    mounted() {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => response.json())
        .then(data => this.pokemonList = data)
        .catch(error => {
          console.error('Error fetching Pokémon list:', error);
        });
    }
  }
</script>