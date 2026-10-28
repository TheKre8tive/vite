import { describe, expect, test } from 'vitest'
import { page } from '~utils'

describe('syntax preserve', () => {
  test('import.meta.url', async () => {
    expect(await page.textContent('.import-meta-url')).toBe('string')
  })
  test('dynamic import', async () => {
    expect(await page.textContent('.dynamic-import')).toBe('success')
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=build-old.spec.ts
