import path from 'node:path'
import { defineConfig } from 'vite'
import svgVirtualModulePlugin from './svgVirtualModulePlugin'

const BASE = '/base/'

export default defineConfig({
  base: BASE,
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    },
  },
  server: {
    fs: {
      strict: true,
      allow: [path.resolve(__dirname, 'src')],
    },
    hmr: {
      overlay: false,
    },
    headers: {
      'x-served-by': 'vite',
    },
  },
  preview: {
    headers: {
      'x-served-by': 'vite',
    },
  },
  define: {
    ROOT: JSON.stringify(path.dirname(__dirname).replace(/\\/g, '/')),
    BASE: JSON.stringify(BASE),
  },
  plugins: [svgVirtualModulePlugin()],
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-base.js
