import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist/sass-modern-compiler-build',
    rollupOptions: {
      input: {
        entry1: path.join(
          import.meta.dirname,
          'sass-modern-compiler-build/entry1.scss',
        ),
        entry2: path.join(
          import.meta.dirname,
          'sass-modern-compiler-build/entry2.scss',
        ),
      },
    },
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-sass-modern-compiler-build.js
