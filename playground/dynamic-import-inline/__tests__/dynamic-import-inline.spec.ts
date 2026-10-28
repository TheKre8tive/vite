import { expect, test } from 'vitest'
import { isBuild, serverLogs } from '~utils'

test.runIf(isBuild)(
  'dont warn when inlineDynamicImports is set to true',
  async () => {
    const log = serverLogs.join('\n')
    expect(log).not.toContain(
      'dynamic import will not move module into another chunk',
    )
  },
)

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=dynamic-import-inline.spec.ts
