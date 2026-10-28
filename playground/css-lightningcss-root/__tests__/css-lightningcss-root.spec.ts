import { expect, test } from 'vitest'
import { getBg, isBuild, page, viteTestUrl } from '~utils'

test('url dependency', async () => {
  const css = await page.$('.url-dep')
  expect(await getBg(css)).toMatch(
    isBuild ? /ok-[-\w]+\.png/ : `${viteTestUrl}/ok.png`,
  )
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=css-lightningcss-root.spec.ts
