import { msg as msgFromDep } from '@vitejs/test-dep-to-optimize'
import depCjs from '@vitejs/test-worker-dep-cjs'
import { mode, msg } from './modules/workerImport.js'
import { bundleWithPlugin } from './modules/test-plugin'
import viteSvg from './vite.svg'
const metaUrl = import.meta.url

self.onmessage = (e) => {
  if (e.data === 'ping') {
    self.postMessage({
      msg,
      mode,
      bundleWithPlugin,
      viteSvg,
      metaUrl,
      name,
      depCjs,
    })
  }
  if (e.data === 'ping-unicode') {
    self.postMessage({
      msg: '•pong•',
      mode,
      bundleWithPlugin,
      viteSvg,
      metaUrl,
      name,
      depCjs,
    })
  }
}
self.postMessage({
  msg,
  mode,
  bundleWithPlugin,
  msgFromDep,
  viteSvg,
  metaUrl,
  name,
  depCjs,
})

// for sourcemap
console.log('my-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=my-worker.ts
