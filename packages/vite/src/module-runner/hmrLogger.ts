import type { HMRLogger } from '../shared/hmr'

const noop = (): void => {}

export const silentConsole: HMRLogger = {
  debug: noop,
  error: noop,
}

export const hmrLogger: HMRLogger = {
  debug: (...msg) => console.log('[vite]', ...msg),
  error: (error) => console.log('[vite]', error),
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=hmrLogger.ts
