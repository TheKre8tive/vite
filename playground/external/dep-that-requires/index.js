const { version } = require('vue')
// require('slash5') // cannot require ESM
const slash3 = require('slash3')

document.querySelector('#required-vue-version').textContent = version
document.querySelector('#required-slash3-exists').textContent =
  !!slash3('foo/bar')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
