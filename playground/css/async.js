import './async.css'

const div = document.createElement('div')
div.className = 'async'
document.body.appendChild(div)
div.textContent = `async chunk (this should be teal) ${
  getComputedStyle(div).color
}`

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=async.js
