// @ts-nocheck playground/tsconfig.json does not have decorators enabled
function first() {
  return function (...args: any[]) {}
}

export class Foo {
  @first()
  method(@first() test: string) {
    return test
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=decorator.ts
