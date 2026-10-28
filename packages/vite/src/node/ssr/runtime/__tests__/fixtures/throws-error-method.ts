interface Foo {
  bar: string
}

export function throwError(foo?: Foo): void {
  throw new Error('method error')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=throws-error-method.ts
