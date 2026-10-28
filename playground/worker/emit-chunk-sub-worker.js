Promise.all([
  import('./module-and-worker'),
  import('./modules/module2'),
  import('./modules/module3'),
]).then((data) => {
  const _data = { ...data[0], ...data[1], ...data[2] }
  self.postMessage(_data)
})

// for sourcemap
console.log('emit-chunk-sub-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=emit-chunk-sub-worker.js
