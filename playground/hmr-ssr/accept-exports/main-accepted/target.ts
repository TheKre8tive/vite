import dep from './dep'

export const a = 'A0'

const bValue = 'B0'
export { bValue as b }

const def = 'D0'

export default def

log(`<<<<<< ${a} ${bValue} ${def} ; ${dep}`)

if (import.meta.hot) {
  import.meta.hot.acceptExports(['a', 'default'])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=target.ts
