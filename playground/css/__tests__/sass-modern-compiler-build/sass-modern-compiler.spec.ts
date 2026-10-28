import { expect, test } from 'vitest'
import { findAssetFile, isBuild } from '~utils'

test.runIf(isBuild)('sass modern compiler build multiple entries', () => {
  expect(findAssetFile(/entry1/, 'sass-modern-compiler-build'))
    .toMatchInlineSnapshot(`
    ".entry1{color:red}
    "
  `)
  expect(findAssetFile(/entry2/, 'sass-modern-compiler-build'))
    .toMatchInlineSnapshot(`
    ".entry2{color:#00f}
    "
  `)
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=sass-modern-compiler.spec.ts
