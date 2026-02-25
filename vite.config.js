import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const normalizeBase = (value) => {
  if (!value) return '/'
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

const defaultRepoBase = '/TransferPro/'

export default defineConfig(({ mode }) => {
  const configuredBase = process.env.VITE_BASE_PATH || defaultRepoBase

  return {
    plugins: [react()],
    // GitHub Pages project sites are served from /<repo>/.
    // VITE_BASE_PATH lets CI/forks inject the right repository path.
    base: mode === 'production' ? normalizeBase(configuredBase) : '/',
  }
})
