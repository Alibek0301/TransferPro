import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative assets path makes static deploy work even from a nested URL/path.
  base: './',
})
