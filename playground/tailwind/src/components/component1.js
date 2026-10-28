export const component1 = /* html */ `
  <div id="component1" data-id="component1" class="text-red-600">component1</div>
`

import.meta.hot?.accept((mod) => {
  document.querySelectorAll('[data-id="component1"]').forEach((d) => {
    d.outerHTML = mod.component1
  })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=component1.js
