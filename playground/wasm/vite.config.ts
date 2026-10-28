import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    // make cannot emit light.wasm
    // and emit add.wasm
    assetsInlineLimit: 80,
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.ts
