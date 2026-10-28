import { describe, expect } from 'vitest'
import { createModuleRunnerTester } from './utils'

describe('module runner hmr works as expected', async () => {
  const it = await createModuleRunnerTester({
    server: {
      // override watch options because it's disabled by default
      watch: {},
      hmr: false,
    },
  })

  it("hmr client is not defined if it's disabled", async ({ runner }) => {
    expect(runner.hmrClient).toBeUndefined()

    const mod = await runner.import('/fixtures/hmr.js')
    expect(mod).toHaveProperty('hmr')
    expect(mod.hmr).toBeUndefined()
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=server-no-hmr.spec.ts
