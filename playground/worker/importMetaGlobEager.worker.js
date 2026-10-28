const modules = import.meta.glob('./modules/*js', { eager: true })

self.onmessage = function (e) {
  self.postMessage(Object.keys(modules))
}

// for sourcemap
console.log('importMetaGlobEager.worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=importMetaGlobEager.worker.js
