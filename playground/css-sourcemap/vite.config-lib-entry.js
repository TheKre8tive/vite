import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    outDir: 'dist/lib-entry',
    lib: {
      entry: ['./index.js', './linked.css'],
      formats: ['es'],
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-lib-entry.js
