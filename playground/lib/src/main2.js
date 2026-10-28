import './index.css'

export default async function message(sel) {
  const message = await import('./message.js')

  await import('./dynamic.css')

  document.querySelector(sel).textContent = message.default
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main2.js
