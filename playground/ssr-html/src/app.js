import { virtual } from 'virtual:file'

const p = document.createElement('p')
p.innerHTML = '✅ Dynamically injected script from file'
document.body.appendChild(p)

text('.virtual', virtual)

function text(el, text) {
  document.querySelector(el).textContent = text
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=app.js
