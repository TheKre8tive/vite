export const x = 'y'

const def = 'def0'

export default def

console.log(`<<< default: ${def}`)

if (import.meta.hot) {
  import.meta.hot.acceptExports(['x'])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=default.ts
