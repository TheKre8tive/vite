export const lazyFoo = async function () {
  const { foo } = await import('./dynamic.js')
  return foo
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
