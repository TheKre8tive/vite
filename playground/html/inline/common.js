import './dep1'
import './dep2'

export function log(name) {
  document.getElementById('output').innerHTML += name + ' '
}

log('common')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=common.js
