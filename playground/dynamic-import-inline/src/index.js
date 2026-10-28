import foo from './foo'

const asyncImport = async () => {
  const { foo } = await import('./foo.js')
  foo()
}

foo()
asyncImport()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
