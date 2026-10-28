let count = 0
export function increment() {
  count++
}
export function getCount() {
  return count
}
// @ts-expect-error not used but this is to test that it works
function neverCalled() {
  import('./dep')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.ts
