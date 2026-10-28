import { valueA } from './circular-dep-init'

export const valueB = 'circ-dep-init-b'
export const valueAB = valueA.concat(` ${valueB}`)

export function getValueAB() {
  return valueAB
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=module-b.js
