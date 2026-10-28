import { displayCount } from './re-export.js'

const incrementValue = () =>
  globalThis.__HMR__['.intermediate-file-delete-increment']

const render = () => {
  globalThis.__HMR__['.intermediate-file-delete-display'] = displayCount(
    Number(incrementValue()),
  )
}

render()

globalThis.__HMR__['.delete-intermediate-file'] = () => {
  globalThis.__HMR__['.intermediate-file-delete-increment'] = `${
    Number(incrementValue()) + 1
  }`
  render()
}

if (import.meta.hot) import.meta.hot.accept()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
