<template>
  <div class="text-white text-xs md:text-base bg-dark p-2 md:p-4 leading-loose h-36 md:h-[38rem] overflow-scroll">
    <ul>
      <li v-for="(pokemon, i) in pokemonList" :key="`poke-${i}`" class="capitalize">#{{ pokemon.entry_number }} - {{
        pokemon.pokemon_species.name }} - <img class="inline-block w-8" src="" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const pokemonList = ref([])

onMounted(async () => {
  const pokeData = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(response => response.json())
  pokemonList.value = pokeData.pokemon_entries
})
</script>