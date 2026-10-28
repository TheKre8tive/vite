export function error() {
  errorInner()
}

function errorInner() {
  // @ts-expect-error "define"
  throw new Error('with-define-object: ' + JSON.stringify(__testDefineObject))
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=with-define-object-ssr.ts
