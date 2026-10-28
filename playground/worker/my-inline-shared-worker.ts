let inlineSharedWorkerCount = 0

// @ts-expect-error onconnect exists in worker
self.onconnect = (event) => {
  inlineSharedWorkerCount++
  const port = event.ports[0]
  if (inlineSharedWorkerCount >= 2) {
    port.postMessage('pong')
  }
}

// for sourcemap
console.log('my-inline-shared-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=my-inline-shared-worker.ts
