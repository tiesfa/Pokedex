<template>
  <div class="flex flex-col gap-4 lg:gap-8">
    <div class="relative flex w-full flex-wrap items-stretch">
      <input 
        v-model="searchQuery"
        type="search"
        class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto p-2 md:p-4 text-xs md:text-sm text-dark outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
        placeholder="Search Pokémon..." 
        aria-label="Search" 
        @keyup.enter="handleSearch"
      />
      <button
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 relative z-[2] transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        type="button" 
        @click="handleSearch"
      >
        Search
      </button>
    </div>

    <div class="flex gap-4 lg:gap-8">
      <button 
        @click="$emit('select', 151)"
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800"
      >
        151 - Mew
      </button>
      <button 
        @click="$emit('select', 2)"
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800"
      >
        002 - Ivysaur
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search', 'select']);
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value.toLowerCase());
    searchQuery.value = '';
  }
};
</script>