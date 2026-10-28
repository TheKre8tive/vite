import { expect, test } from 'vitest'
import { page } from '~utils'

test('object hooks', async () => {
  expect(await page.textContent('#transform')).toMatch('ok')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=object-hooks.spec.ts
