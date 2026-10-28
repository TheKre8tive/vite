import { afterAll } from 'vitest'
import { startDefaultServe } from '~utils'

export let serveError: Error | undefined

export async function serve() {
  try {
    await startDefaultServe()
  } catch (e) {
    serveError = e
  }
}

export function clearServeError() {
  serveError = undefined
}

afterAll(() => {
  if (serveError) {
    throw serveError
  }
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=serve.ts
