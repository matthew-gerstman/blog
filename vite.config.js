import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist');
        copyFileSync(
          resolve(outDir, 'index.html'),
          resolve(outDir, '404.html')
        );
      },
    },
  ],
  base: '/',
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
