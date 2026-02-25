import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub project pages this should match the repository name.
  // It avoids asset 404s when opening /TransferPro (without trailing slash).
  base: '/TransferPro/',
})
