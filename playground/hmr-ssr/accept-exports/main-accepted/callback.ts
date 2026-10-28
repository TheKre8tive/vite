export const x = 'X'

if (import.meta.hot) {
  import.meta.hot.acceptExports(['x'], (m) => {
    log(`reloaded >>> ${m.x}`)
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=callback.ts
