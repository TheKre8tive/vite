export const g = import.meta.glob('/pkg-pages/*.js')
document.querySelector('.in-package').textContent = JSON.stringify(
  Object.keys(g).sort(),
)

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
