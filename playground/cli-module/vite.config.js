// eslint-disable-next-line import-x/no-nodejs-modules
import { URL } from 'url'
import { defineConfig } from 'vite'

// make sure bundling works even if `url` refers to the locally installed
// `url` package instead of the built-in `url` nodejs module
globalThis.__test_url = URL

export default defineConfig({
  server: {
    host: 'localhost',
  },
  build: {
    //speed up build
    minify: false,
    target: 'esnext',
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.js
