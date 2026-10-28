export function startWorker(handler) {
  const worker = new Worker(new URL('./worker.js', import.meta.url), {
    type: 'module',
  })
  worker.postMessage('main')
  worker.addEventListener('message', (e) => {
    handler(e)
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
