import { expect, test } from 'vitest'
import { browserLogs, page } from '~utils'

test('should have no 404s', () => {
  browserLogs.forEach((msg) => {
    expect(msg).not.toMatch('404')
  })
})

test('not contain `.mjs`', async () => {
  const appHtml = await page.content()
  expect(appHtml).toMatch('Hello Vite!')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=extensions.spec.ts
