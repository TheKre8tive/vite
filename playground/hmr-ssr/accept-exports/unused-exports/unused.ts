export const x = 'x'

export const y = 'y'

export default 'z'

log('-- unused --')

if (import.meta.hot) {
  import.meta.hot.acceptExports([])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=unused.ts
