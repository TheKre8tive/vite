 

export { a as c } from './a'

import.meta.hot?.accept(() => {
  console.log('accept c')
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=c.ts
