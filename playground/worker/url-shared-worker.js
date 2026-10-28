import constant from './modules/module0.js'

self.onconnect = (event) => {
  const port = event.ports[0]
  port.postMessage(constant)
}

// for sourcemap
console.log('url-shared-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=url-shared-worker.js
