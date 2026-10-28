import './parent.js'

if (import.meta.hot) {
  // Need to accept, to register a callback for HMR
  import.meta.hot.accept(() => {
    // Triggers full page reload because no importers
    import.meta.hot.invalidate()
  })
}

const root = document.querySelector('.invalidation-root')

// Non HMR-able behaviour
if (!root.innerHTML) {
  root.innerHTML = 'Init'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=root.js
