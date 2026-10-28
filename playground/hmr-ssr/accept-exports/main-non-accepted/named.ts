import dep from './dep'

export const a = 'A0'

export const b = 'B0'

log(`<<< named: ${a} ; ${dep}`)

if (import.meta.hot) {
  import.meta.hot.acceptExports(['b'])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=named.ts
