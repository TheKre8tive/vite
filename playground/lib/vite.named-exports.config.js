import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    supported: {
      // Force esbuild inject helpers to test regex
      'object-rest-spread': false,
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main-named.js'),
      name: 'MyLibNamed',
      formats: ['umd', 'iife'],
      fileName: 'my-lib-named',
    },
    outDir: 'dist/named',
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.named-exports.config.js
