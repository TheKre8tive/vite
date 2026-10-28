import { defineConfig } from 'vite'

// Overriding the NODE_ENV set by vitest
process.env.NODE_ENV = ''

export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
    include: ['@vitejs/test-dep-no-discovery'],
  },

  build: {
    // to make tests faster
    minify: false,
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
