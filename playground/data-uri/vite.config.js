import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'post-plugin',
      enforce: 'post',
      resolveId(id) {
        if (id.replace(/\?.*$/, '') === 'comma/foo') {
          return id
        }
      },
      load(id) {
        if (id.replace(/\?.*$/, '') === 'comma/foo') {
          return `export const comma = 'hi'`
        }
      },
    },
  ],
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
