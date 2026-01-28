import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // base: 'modern-pokedex', // For GitHub Pages deployment
  base: 'https://tiesfa.com/modern-pokedex/', // For Hostinger deployment
  plugins: [vue()],
})
