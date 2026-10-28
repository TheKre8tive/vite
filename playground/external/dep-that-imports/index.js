import { version } from 'vue'
import slash5 from 'slash5'
import slash3 from 'slash3'

document.querySelector('#imported-vue-version').textContent = version
document.querySelector('#imported-slash5-exists').textContent =
  !!slash5('foo/bar')
document.querySelector('#imported-slash3-exists').textContent =
  !!slash3('foo/bar')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
