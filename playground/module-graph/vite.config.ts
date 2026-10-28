import { defineConfig } from 'vite'
import type { Plugin } from 'vite'

export default defineConfig({
  plugins: [slowModulePlugin()],
})

function slowModulePlugin(): Plugin {
  return {
    name: 'slow-module',
    resolveId(id) {
      if (id === 'virtual:slow-module') {
        return '\0virtual:slow-module'
      }
    },
    async load(id) {
      if (id === '\0virtual:slow-module') {
        await new Promise((resolve) => setTimeout(resolve, 500))
        return `export const msg = '[success]'`
      }
    },
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.ts
