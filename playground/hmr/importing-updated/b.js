import a from './a.js'

const val = `b0,${a}`
document.querySelector('.importing-reloaded').innerHTML += `b.js: ${val}<br>`

if (import.meta.hot) {
  import.meta.hot.accept()
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=b.js
