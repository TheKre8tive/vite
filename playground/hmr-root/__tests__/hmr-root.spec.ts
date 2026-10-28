import { expect, test } from 'vitest'

import { editFile, isServe, page } from '~utils'

test.runIf(isServe)('should watch files outside root', async () => {
  expect(await page.textContent('#foo')).toBe('foo')
  editFile('foo.js', (code) => code.replace("'foo'", "'foobar'"))
  await page.waitForEvent('load')
  await expect.poll(() => page.textContent('#foo')).toBe('foobar')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=hmr-root.spec.ts
