import { expect, test } from 'vitest'
import { page } from '~utils'

test('from source code', async () => {
  expect(await page.textContent('.src'), 'bar')
})

test('from dependency', async () => {
  expect(await page.textContent('.dep'), 'world')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=import-assertion.spec.ts
