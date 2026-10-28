self.postMessage(
  [
    'A string',
    import.meta.env.BASE_URL,
    self.location.url,
    import.meta && import.meta.url,
    import.meta.url,
  ].join(' '),
)

// for sourcemap
console.log('url-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=url-worker.js
