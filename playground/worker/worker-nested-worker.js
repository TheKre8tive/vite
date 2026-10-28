import ImportMetaGlobEagerWorker from './importMetaGlobEager.worker?worker'
import SubWorker from './sub-worker?worker'

const subWorker = new SubWorker()

self.onmessage = (event) => {
  if (event.data === 'ping') {
    subWorker.postMessage('ping')
  }
}

self.postMessage(self.location.href)

subWorker.onmessage = (ev) => {
  self.postMessage({
    type: 'module',
    data: ev.data,
  })
}

const classicWorker = new Worker(new URL('./url-worker.js', import.meta.url), {
  type: 'module',
})
classicWorker.addEventListener('message', (ev) => {
  self.postMessage({
    type: 'constructor',
    data: ev.data,
  })
})

const importMetaGlobEagerWorker = new ImportMetaGlobEagerWorker()

importMetaGlobEagerWorker.postMessage('1')

importMetaGlobEagerWorker.addEventListener('message', (ev) => {
  self.postMessage({
    type: 'importMetaGlobEager',
    data: ev.data,
  })
})

// for sourcemap
console.log('worker-nested-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker-nested-worker.js
