import { expect, test } from 'vitest'
import { getColor, page } from '~utils'

test('should have css applied on second dynamic import', async () => {
  await expect.poll(() => page.textContent('.content')).toMatch('Initial')
  await page.click('.b')

  await expect.poll(() => page.textContent('.content')).toMatch('Reference')
  expect(await getColor('.content')).toBe('red')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=multiple-entrypoints.spec.ts
