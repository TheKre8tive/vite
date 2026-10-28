import { fileURLToPath } from 'node:url'
import { test } from 'vitest'
import { createServer } from '../../server'

const root = fileURLToPath(new URL('./', import.meta.url))

async function createDevServer() {
  const server = await createServer({
    configFile: false,
    root,
    logLevel: 'silent',
    optimizeDeps: {
      noDiscovery: true,
    },
  })
  server.pluginContainer.buildStart({})
  return server
}

test('call rewriteStacktrace twice', async () => {
  const server = await createDevServer()
  for (let i = 0; i < 2; i++) {
    try {
      await server.ssrLoadModule('/fixtures/modules/has-error.js')
    } catch (e) {
      server.ssrFixStacktrace(e)
    }
  }
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=ssrStacktrace.spec.ts
