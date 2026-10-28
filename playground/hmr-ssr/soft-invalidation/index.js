import { foo } from './child'

// @ts-expect-error global
export const msg = `soft-invalidation/index.js is transformed ${__TRANSFORM_COUNT__} times. child is ${foo}`

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
