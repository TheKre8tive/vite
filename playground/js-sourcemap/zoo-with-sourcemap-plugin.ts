import MagicString from 'magic-string'
import type { Plugin } from 'vite'

export const transformZooWithSourcemapPlugin: () => Plugin = () => ({
  name: 'sourcemap',
  transform(code, id) {
    if (id.includes('zoo.js')) {
      const ms = new MagicString(code)
      ms.append('// add comment')
      return {
        code: ms.toString(),
        // NOTE: MagicString without `filename` option generates
        //       a sourcemap with `sources: ['']` or `sources: [null]`
        map: ms.generateMap({ hires: true }),
      }
    }
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=zoo-with-sourcemap-plugin.ts
