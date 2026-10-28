// @ts-nocheck
import '../nested/main'
import '../nested-with-extends/main'
import './decorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { MainTypeOnlyClass } from './not-used-type'

class MainBase {
  set data(value: string) {
    console.log('data setter in MainBase')
  }
}
class MainDerived extends MainBase {
  // No longer triggers a 'console.log'
  // when using 'useDefineForClassFields'.
  data = 10

  foo?: MainTypeOnlyClass
}

const d = new MainDerived()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main.ts
