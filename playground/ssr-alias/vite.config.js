import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    ssr: './src/main.js',
  },
  resolve: {
    alias: {
      '@vitejs/test-alias-original': '/src/alias-replaced.js',
      '@vitejs/test-alias-non-dep': '/src/alias-replaced.js',
      'node:process': '/src/alias-process.js',
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
