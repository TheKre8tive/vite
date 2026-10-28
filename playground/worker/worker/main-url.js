import workerUrl from '../simple-worker?worker&url'

function text(el, text) {
  document.querySelector(el).textContent = text
}

const worker = new Worker(workerUrl, { type: 'module' })

worker.addEventListener('message', (ev) => {
  text('.simple-worker-url', JSON.stringify(ev.data))
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main-url.js
