import { describe, expect, test } from 'vitest'
import { findAssetFile, isBuild } from '~utils'

describe.runIf(isBuild)('no css minify', () => {
  test('js minified but css not minified', () => {
    expect(findAssetFile(/index-[-\w]+\.js$/, 'no-css-minify')).not.toMatch(
      '(function polyfill() {',
    )
    expect(findAssetFile(/index-[-\w]+\.css$/, 'no-css-minify')).toMatch(`\
.test-minify {
  color: rgba(255, 255, 0, 0.7);
}`)
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=css-no-css-minify.spec.ts
