export const foo = 1
export { foo as nestedFoo } from './hmrNestedDep'

if (import.meta.hot) {
  const data = import.meta.hot.data
  if ('fromDispose' in data) {
    log(`(dep) foo from dispose: ${data.fromDispose}`)
  }

  import.meta.hot.dispose((data) => {
    log(`(dep) foo was: ${foo}`)
    data.fromDispose = foo
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=hmrDep.js
