import { resolve } from 'node:path'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [legacy()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        'style-only-entry': resolve(__dirname, 'style-only-entry.css'),
      },
    },
    watch: {},
    outDir: 'dist/watch',
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-watch.js
