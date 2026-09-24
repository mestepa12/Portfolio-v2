import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages sirve el sitio en mestepa12.github.io/Portfolio/, no en la raíz
  base: '/Portfolio/',
})
