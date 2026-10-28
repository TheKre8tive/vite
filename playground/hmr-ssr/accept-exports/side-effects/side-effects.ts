export const x = 'x'

export const y = 'y'

export default 'z'

log('>>> side FX')

globalThis.__HMR__['.app'] = 'hey'

if (import.meta.hot) {
  import.meta.hot.acceptExports(['default'])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=side-effects.ts
