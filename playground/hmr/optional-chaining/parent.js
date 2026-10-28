// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { foo } from './child'

import.meta.hot?.accept('./child', ({ foo }) => {
  console.log('(optional-chaining) child update')
  document.querySelector('.optional-chaining').textContent = foo
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=parent.js
