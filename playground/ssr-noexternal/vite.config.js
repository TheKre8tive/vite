import { defineConfig } from 'vite'

const noExternal = ['@vitejs/test-require-external-cjs']
export default defineConfig({
  ssr: {
    noExternal,
    external: ['@vitejs/test-external-cjs'],
    optimizeDeps: {
      include: noExternal,
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      external: ['@vitejs/test-external-cjs'],
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
