import def, { a } from './target'
import { x } from './callback'

// we don't want to pollute other checks' logs...
if (0 > 1) log(x)

log(`>>>>>> ${a} ${def}`)

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main-accepted.ts
