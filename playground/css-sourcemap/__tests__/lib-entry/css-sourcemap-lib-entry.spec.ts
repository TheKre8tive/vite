import { describe, expect, test } from 'vitest'
import { findAssetFile, isBuild } from '~utils'

describe.runIf(isBuild)('css lib entry', () => {
  test('remove useless js sourcemap', async () => {
    expect(findAssetFile('linked.js.map', 'lib-entry', './')).toBe('')
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=css-sourcemap-lib-entry.spec.ts
