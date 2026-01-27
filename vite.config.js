import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/modern-pokedex/', // For GitHub Pages deployment
  plugins: [vue()],
})
