import { expect, test } from 'vitest'
import { isServe, page, viteServer } from '~utils'

test.runIf(isServe)('importedUrls order is preserved', async () => {
  const el = page.locator('.imported-urls-order')
  expect(await el.textContent()).toBe('[success]')
  const mod = await viteServer.environments.client.moduleGraph.getModuleByUrl(
    '/imported-urls-order.js',
  )
  const importedModuleIds = [...mod.importedModules].map((m) => m.url)
  expect(importedModuleIds).toEqual(['\x00virtual:slow-module', '/empty.js'])
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=module-graph.spec.ts
