<template>
  <div class="flex flex-col gap-4 lg:gap-8">
    <div class="relative flex w-full flex-wrap items-stretch">
      <input v-model="searchQuery" type="search" :disabled="isLoading"
        class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto p-2 md:p-4 text-xs md:text-sm outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500"
        :class="[hasError ? 'border-2 border-red-500 text-red-500 placeholder-red-500' : 'text-dark border-none',]" 
        :placeholder="hasError ? 'Pokémon not found!' : 'Search Pokémon...'" @keyup.enter="handleSearch" />
      <button class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 relative z-[2] min-w-[80px]" type="button"
        @click="handleSearch">
        {{ isLoading ? '...' : 'Search' }}
      </button>
    </div>

    <div class="flex gap-4 lg:gap-8">
      <button @click="navigate(-1)" :disabled="currentId <= 1"
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800 disabled:opacity-50">
        &lt; Previous
      </button>
      <button @click="navigate(1)" :disabled="currentId >= 1025"
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800 disabled:opacity-50">
        Next &gt;
      </button>
    </div>

    <button @click="toggleShiny"
      class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800 transition-colors"
      :class="{ 'text-yellow-400': isShiny }">
      Version: {{ isShiny ? 'SHINY' : 'NORMAL' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentId: { type: [Number, String], default: 1 }
});

const emit = defineEmits(['search', 'select', 'toggle-shiny']);
const searchQuery = ref('');
const isShiny = ref(false);
const isLoading = ref(false);
const hasError = ref(false);

const toggleShiny = () => {
  isShiny.value = !isShiny.value;
  emit('toggle-shiny', isShiny.value);
};

const handleSearch = async () => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return;
  hasError.value = false;
  isLoading.value = true;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

    if (!response.ok) throw new Error('Not found');
    
    const data = await response.json();
    emit('search', data.id);
    searchQuery.value = '';
  } catch (err) {
    searchQuery.value = '';
    hasError.value = true;
    setTimeout(() => { hasError.value = false; }, 2000);
  } finally {
    isLoading.value = false;
  }
};

const navigate = (direction) => {
  const newId = Number(props.currentId) + direction;
  if (newId >= 1) {
    emit('select', newId);
  }
};
</script>