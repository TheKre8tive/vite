import { expect, test } from 'vitest'
import { page } from '~utils'

test('resolve.mainFields.custom-first', async () => {
  expect(await page.textContent('.custom-browser-main-field')).toBe(
    'resolved custom field',
  )
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=resolve-mainfields-custom-first.spec.ts
