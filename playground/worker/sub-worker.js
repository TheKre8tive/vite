self.onmessage = (event) => {
  if (event.data === 'ping') {
    self.postMessage(`pong ${self.location.href}`)
  }
}

// for sourcemap
console.log('sub-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=sub-worker.js
