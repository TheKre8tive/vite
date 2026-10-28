Promise.all([import('./deps-all-accepted'), import('./deps-some-accepted')])
  .then(([all, some]) => {
    console.log('loaded:all:' + all.a + all.b + all.c + all.default)
    console.log('loaded:some:' + some.a + some.b + some.c + some.default)
    console.log('>>> ready <<<')
  })
  .catch((err) => {
    console.error(err)
  })

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=dynamic-imports.ts
