import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 9616,
    proxy: {
      '/anotherApp': {
        target: 'http://localhost:9617',
        ws: true,
      },
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
