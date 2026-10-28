import './base.css'

export function createButton(className) {
  const button = document.createElement('button')
  button.className = `btn ${className}`
  document.body.appendChild(button)
  button.textContent = `button ${getComputedStyle(button).color}`
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=base.js
