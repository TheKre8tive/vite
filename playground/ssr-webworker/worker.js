import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { Miniflare } from 'miniflare'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = !!process.env.TEST

export async function createServer(port) {
  const mf = new Miniflare({
    scriptPath: path.resolve(__dirname, 'dist/worker/entry-worker.js'),
    port,
    modules: true,
    compatibilityFlags: ['nodejs_compat'],
  })
  await mf.ready
  return { mf }
}

if (!isTest) {
  createServer(5173).then(() => console.log('http://localhost:5173'))
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker.js
