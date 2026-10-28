import { beforeEach, describe, expect, test } from 'vitest'
import { findAssetFile, isBuild, startDefaultServe } from '~utils'

beforeEach(async () => {
  await startDefaultServe()
})

for (let i = 0; i < 5; i++) {
  describe.runIf(isBuild)('css files has same basename', () => {
    test('emit file name should consistent', () => {
      expect(findAssetFile('sub.css', 'same-file-name', '.')).toMatch(
        '.sub1-sub',
      )
      expect(findAssetFile('sub2.css', 'same-file-name', '.')).toMatch(
        '.sub2-sub',
      )
    })
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=css-same-file-name.spec.ts
