<template>
  <div class="text-white text-xs md:text-base bg-dark p-2 md:p-4 leading-loose h-36 md:h-[38rem] overflow-scroll">
    <ul>
      <!-- <li v-for="(pokemon, i) in pokemonList" :key="`poke-${i}`" class="capitalize">#{{ pokemon.entry_number }} - {{
        pokemon.pokemon_species.name }} - <img class="inline-block w-8" :src="" alt="">
      </li> -->
    </ul>
  </div>
</template>

<script>
  // Vue2 method
  export default {
    data() {
      return {
        response: null
      }
    },
    async created() {
      this.response = await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png")
      console.log(this.response);
    },
    mounted() {
      
    },
  }
</script>