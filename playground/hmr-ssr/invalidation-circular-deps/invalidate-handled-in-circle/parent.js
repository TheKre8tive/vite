import { value } from './child'

if (import.meta.hot) {
  import.meta.hot.accept(() => {})
}

log('(invalidation circular deps handled) parent is executing')
setTimeout(() => {
  globalThis.__HMR__['.invalidation-circular-deps-handled'] = value
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=parent.js
