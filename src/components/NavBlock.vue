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
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 relative z-[2]"
        type="button" 
        @click="handleSearch"
      >
        Search
      </button>
    </div>

    <div class="flex gap-4 lg:gap-8">
      <button 
        @click="navigate(-1)"
        :disabled="currentId <= 1"
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt; Previous
      </button>
      <button 
        @click="navigate(1)"
        :disabled="currentId >= 1025"
        class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next &gt;
      </button>
    </div>
    <button 
      @click="toggleShiny"
      class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full hover:bg-gray-800 transition-colors"
      :class="{ 'text-accent-candyRed': isShiny }"
    >
      Version: {{ isShiny ? 'SHINY' : 'NORMAL' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentId: {
    type: [Number, String],
    default: 1
  }
});

const emit = defineEmits(['search', 'select', 'toggle-shiny']);
const searchQuery = ref('');
const isShiny = ref(false);

const toggleShiny = () => {
  isShiny.value = !isShiny.value;
  emit('toggle-shiny', isShiny.value);
};

// The API handles the logic of finding the right Pokémon
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value.toLowerCase());
    searchQuery.value = '';
  }
};

const navigate = (direction) => {
  const newId = Number(props.currentId) + direction;
  if (newId >= 1) {
    emit('select', newId);
  }
};
</script>