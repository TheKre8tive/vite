export function callItself() {
  return '[success]'
}

export async function callPeerDep() {
  return await import('foobar')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
