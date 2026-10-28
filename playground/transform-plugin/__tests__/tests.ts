import { expect, test } from 'vitest'
import { editFile, isBuild, page } from '~utils'

export const tests = () => {
  test('should re-run transform when dependencies are edited', async () => {
    expect(await page.textContent('#transform-count')).toBe('1')

    if (isBuild) return
    editFile('plugin-dep.js', (str) => str)
    await expect.poll(() => page.textContent('#transform-count')).toBe('2')

    editFile('plugin-dep-load.js', (str) => str)
    await expect.poll(() => page.textContent('#transform-count')).toBe('3')
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=tests.ts
