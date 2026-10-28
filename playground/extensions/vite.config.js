import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [{ find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' }],
    extensions: ['.js'],
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
