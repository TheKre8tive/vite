self.onmessage = async () => {
  const mod = await import('./dynamic')
  self.postMessage('hello from worker: ' + mod.default)
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker.js
