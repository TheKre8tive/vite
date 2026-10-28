import fsp from 'node:fs/promises'
import { cleanUrl } from '../../shared/utils'
import type { Plugin } from '../plugin'

/**
 * A plugin to provide build load fallback for arbitrary request with queries.
 */
export function buildLoadFallbackPlugin(): Plugin {
  return {
    name: 'vite:load-fallback',
    load: {
      async handler(id) {
        try {
          const cleanedId = cleanUrl(id)
          const content = await fsp.readFile(cleanedId, 'utf-8')
          this.addWatchFile(cleanedId)
          return content
        } catch {
          const content = await fsp.readFile(id, 'utf-8')
          this.addWatchFile(id)
          return content
        }
      },
    },
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=loadFallback.ts
