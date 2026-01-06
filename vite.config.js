import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mabastidas-tech.github.io/", // nombre exacto de tu repo en GitHub
})
