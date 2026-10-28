import './static.js'

const link = document.head.appendChild(document.createElement('link'))
link.rel = 'preload'
link.as = 'style'
link.href = new URL('./dynamic.css', import.meta.url).href

import('./dynamic.js').then(async ({ lazyLoad }) => {
  await lazyLoad()
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
