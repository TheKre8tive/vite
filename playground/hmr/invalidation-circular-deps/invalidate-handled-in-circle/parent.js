import { value } from './child'

if (import.meta.hot) {
  import.meta.hot.accept(() => {})
}

console.log('(invalidation circular deps handled) parent is executing')
setTimeout(() => {
  document.querySelector('.invalidation-circular-deps-handled').innerHTML =
    value
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=parent.js
