// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NestedWithExtendsTypeOnlyClass } from './not-used-type'

class NestedWithExtendsBase {
  set data(value: string) {
    console.log('data setter in NestedWithExtendsBase')
  }
}
class NestedWithExtendsDerived extends NestedWithExtendsBase {
  // No longer triggers a 'console.log'
  // when using 'useDefineForClassFields'.
  data = 10

  foo?: NestedWithExtendsTypeOnlyClass
}

const d = new NestedWithExtendsDerived()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main.ts
