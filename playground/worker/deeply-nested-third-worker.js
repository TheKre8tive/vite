self.postMessage({
  type: 'deeplyNestedThirdWorker',
  data: [
    'Hello from third level nested worker',
    import.meta.env.BASE_URL,
    self.location.url,
    import.meta.url,
  ].join(' '),
})

console.log('deeply-nested-third-worker.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=deeply-nested-third-worker.js
