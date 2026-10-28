import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        other: resolve(__dirname, './other.js'),
        style2: resolve(__dirname, './style2.js'),
        'shared-css-with-js': resolve(__dirname, 'shared-css-with-js.html'),
        'shared-css-no-js': resolve(__dirname, 'shared-css-no-js.html'),
      },
      output: {
        manualChunks(id) {
          // make `chunk.css` it's own chunk for easier testing of pure css chunks
          if (id.includes('chunk.css')) {
            return 'chunk'
          }
        },
      },
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
