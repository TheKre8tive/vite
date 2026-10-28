import { expect, test } from 'vitest'
import { isBuild, page, viteTestUrl } from '~utils'

test.runIf(isBuild)('includes only a single script tag', async () => {
  await page.goto(viteTestUrl + '/no-polyfills-no-systemjs.html')

  await expect
    .poll(() => page.getAttribute('#vite-legacy-entry', 'data-src'))
    .toMatch(/.\/assets\/index-legacy-(.+)\.js/)

  expect(await page.locator('script').count()).toBe(1)
  expect(await page.locator('#vite-legacy-polyfill').count()).toBe(0)
  expect(await page.locator('#vite-legacy-entry').count()).toBe(1)
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=legacy-no-polyfills-no-systemjs.spec.ts
