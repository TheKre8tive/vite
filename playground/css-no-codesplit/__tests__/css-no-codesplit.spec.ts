import { describe, expect, test } from 'vitest'
import { getColor, isBuild, listAssets } from '~utils'

test('should load all stylesheets', async () => {
  expect(await getColor('.shared-linked')).toBe('blue')
  await expect.poll(() => getColor('.async-js')).toBe('blue')
})

describe.runIf(isBuild)('build', () => {
  test('should remove empty chunk', async () => {
    const assets = listAssets()
    expect(assets).not.toContainEqual(
      expect.stringMatching(/shared-linked-.*\.js$/),
    )
    expect(assets).not.toContainEqual(expect.stringMatching(/async-js-.*\.js$/))
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=css-no-codesplit.spec.ts
