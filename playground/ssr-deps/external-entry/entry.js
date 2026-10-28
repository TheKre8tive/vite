// Module with state, to check that it is properly externalized and
// not bundled in the optimized deps
let msg
export function setMessage(externalMsg) {
  msg = externalMsg
}
export default function getMessage() {
  return msg
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=entry.js
