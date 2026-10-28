import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist/preload-disabled',
    minify: 'terser',
    terserOptions: {
      format: {
        beautify: true,
      },
      compress: {
        passes: 3,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('chunk.js')) {
            return 'chunk'
          }
        },
      },
    },
    modulePreload: false,
  },
  cacheDir: 'node_modules/.vite-preload-disabled',
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-preload-disabled.js
