import * as all from './deps-all-accepted'
import * as some from './deps-some-accepted'

console.log('loaded:all:' + all.a + all.b + all.c + all.default)
console.log('loaded:some:' + some.a + some.b + some.c + some.default)
console.log('>>> ready <<<')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=star-imports.ts
