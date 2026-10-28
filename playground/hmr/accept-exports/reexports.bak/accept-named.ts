export { a, b } from './source'

if (import.meta.hot) {
  // import.meta.hot.accept('./source', (m) => {
  //   console.log(`accept-named reexport:${m.a},${m.b}`)
  // })
  import.meta.hot.acceptExports('a', (m) => {
    console.log(`accept-named reexport:${m.a},${m.b}`)
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=accept-named.ts
