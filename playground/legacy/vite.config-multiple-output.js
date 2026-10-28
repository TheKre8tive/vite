import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [legacy({ modernPolyfills: true })],
  build: {
    manifest: true,
    minify: false,
    rollupOptions: {
      output: [
        {
          assetFileNames() {
            return 'assets/subdir/[name]-[hash][extname]'
          },
          entryFileNames: `assets/subdir/[name].js`,
          chunkFileNames: `assets/subdir/[name].js`,
        },
        {
          assetFileNames() {
            return 'assets/subdir/[name]-[hash][extname]'
          },
          entryFileNames: `assets/anotherSubdir/[name].js`,
          chunkFileNames: `assets/anotherSubdir/[name].js`,
        },
      ],
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-multiple-output.js
