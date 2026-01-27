<template>
  <select 
    v-model="selectedGen"
    @change="handleChange"
    class="text-xs md:text-sm bg-light text-dark focus:ring-blue-500 block w-full p-2 md:p-4 outline-none"
  >
    <option v-for="gen in generations" :key="gen.id" :value="gen">
      {{ gen.name }}
    </option>
  </select>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['change-generation']);

const generations = [
  { id: 1, name: 'Generation 1', offset: 0, limit: 151 },
  { id: 2, name: 'Generation 2', offset: 151, limit: 100 },
  { id: 3, name: 'Generation 3', offset: 251, limit: 135 },
  { id: 4, name: 'Generation 4', offset: 386, limit: 107 },
];

const selectedGen = ref(generations[0]);

const handleChange = () => {
  emit('change-generation', selectedGen.value);
};
</script>