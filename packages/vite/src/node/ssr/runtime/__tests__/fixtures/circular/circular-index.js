export { a } from './circular-a'
export { b } from './circular-b'

// since there is no .accept, it does full reload
import.meta.hot.on('vite:beforeFullReload', () => {
  console.log('full reload')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=circular-index.js
