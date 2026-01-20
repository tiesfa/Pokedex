<template>
    <div class="bg-light rounded-bl-3xl p-8 md:p-16">
        <div class="bg-accent-pastel">
            <img class="w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        mounted() {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
            .then(response => response.json())
            .then(data => this.pokemonList = data)
            .catch(error => {
            console.error('Error fetching Pokémon list:', error);
            });
        }
    }
</script>
