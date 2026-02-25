import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'TransferPro'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages project site is served from /<repo>/.
  // Using an explicit base avoids 404 on assets when URL is opened without trailing slash.
  base: mode === 'production' ? `/${repoName}/` : '/',
}))
