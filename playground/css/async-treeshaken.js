import './async-treeshaken.css'

const div = document.createElement('div')
div.className = 'async-treeshaken'
div.textContent =
  'async treeshaken chunk (this should be plum and should not show up in prod)'
document.body.appendChild(div)

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=async-treeshaken.js
