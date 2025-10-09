import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist'
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
