import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'https://tiesfa.github.io/modern-pokedex/', // For GitHub Pages deployment
  plugins: [vue()],
})
