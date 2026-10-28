import { module } from './module'

self.onmessage = () => {
  self.postMessage(module)
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker.js
