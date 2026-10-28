import { expect, test } from 'vitest'
import { isBuild, page, viteTestUrl } from '~utils'

test('should load and execute the JS file', async () => {
  await page.goto(viteTestUrl + '/no-polyfills.html')
  await expect.poll(() => page.textContent('main')).toMatch('👋')
})

test.runIf(isBuild)('includes a script tag for SystemJS', async () => {
  await expect
    .poll(() => page.getAttribute('#vite-legacy-polyfill', 'src'))
    .toMatch(/.\/assets\/polyfills-legacy-(.+)\.js/)
  await expect
    .poll(() => page.getAttribute('#vite-legacy-entry', 'data-src'))
    .toMatch(/.\/assets\/index-legacy-(.+)\.js/)
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=legacy-no-polyfills.spec.ts
