import init from './add.wasm?init'
init().then(({ exports }) => {
  self.postMessage({ result: exports.add(1, 2) })
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker.js
