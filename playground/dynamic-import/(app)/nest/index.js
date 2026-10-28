const base = 'main'
import(`../${base}.js`).then((mod) => {
  document.querySelector(
    '.dynamic-import-with-vars-contains-parenthesis',
  ).textContent = mod.hello()
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
