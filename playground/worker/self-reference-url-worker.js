self.addEventListener('message', (e) => {
  if (e.data === 'main') {
    const selfWorker = new Worker(
      new URL('./self-reference-url-worker.js', import.meta.url),
      {
        type: 'module',
      },
    )
    selfWorker.postMessage('nested')
    selfWorker.addEventListener('message', (e) => {
      self.postMessage(e.data)
    })
  }

  self.postMessage(`pong: ${e.data}`)
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=self-reference-url-worker.js
