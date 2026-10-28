import './b'

export const c = 'c'

function render(content) {
  document.querySelector('.self-accept-within-circular').textContent = content
}
render(c)

import.meta.hot?.accept((nextExports) => {
  render(nextExports.c)
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=c.js
