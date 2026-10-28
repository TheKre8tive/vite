import { defineConfig } from 'vite'
import baseConfig from './vite.config.js'

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    outDir: 'dist/no-css-minify',
    minify: true,
    cssMinify: false,
  },
  cacheDir: 'node_modules/.vite-no-css-minify',
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-no-css-minify.js
