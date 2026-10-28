import path from 'node:path'
import { defineConfig } from 'vite'

// Check that helpers injection is properly constrained

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main-helpers-injection.js'),
      name: 'MyLib',
      formats: ['iife'],
      fileName: 'my-lib-custom-filename',
    },
    minify: false,
    outDir: 'dist/helpers-injection',
  },
  plugins: [],
  cacheDir: 'node_modules/.vite-helpers-injection',
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.helpers-injection.config.js
