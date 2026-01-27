<template>
  <select 
    id="generations"
    v-model="selectedGen"
    @change="handleChange"
    class="text-xs md:text-sm bg-light text-dark focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-4 outline-none"
  >
    <option v-for="gen in generations" :key="gen.id" :value="gen.id">
      {{ gen.name }}
    </option>
  </select>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['change-generation']);
const selectedGen = ref(1);
const generations = [
  { id: 1, name: 'Generation 1' },
  { id: 2, name: 'Generation 2' },
  { id: 3, name: 'Generation 3' },
  { id: 4, name: 'Generation 4' },
  { id: 5, name: 'Generation 5' },
];

const handleChange = () => {
  emit('change-generation', selectedGen.value);
};
</script>