import { expect, test } from 'vitest'
import { isServe, testDir, viteServer } from '~utils'

test.runIf(isServe)('dev', async () => {
  const mod = await viteServer.ssrLoadModule('/src/main.js')
  expect(mod.default).toEqual({
    dep: 'ok',
    nonDep: 'ok',
    builtin: 'ok',
  })
})

test.runIf(!isServe)('build', async () => {
  const mod = await import(`${testDir}/dist/main.js`)
  expect(mod.default).toEqual({
    dep: 'ok',
    nonDep: 'ok',
    builtin: 'ok',
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=ssr-alias.spec.ts
