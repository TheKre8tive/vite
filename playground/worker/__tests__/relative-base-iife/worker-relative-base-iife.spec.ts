import { expect, test } from 'vitest'
import { isBuild, page } from '~utils'

test('asset url', async () => {
  await expect
    .poll(() => page.textContent('.asset-url'))
    .toMatch(isBuild ? '/worker-assets/worker_asset-vite' : '/vite.svg')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker-relative-base-iife.spec.ts
