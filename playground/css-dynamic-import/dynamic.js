import './dynamic.css'

export const lazyLoad = async () => {
  await import('./static.js')
  document.body.classList.add('loaded')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=dynamic.js
