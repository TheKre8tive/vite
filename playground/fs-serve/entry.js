import { msg } from './nested/foo'

export const fullmsg = msg + 'bar'

document.querySelector('.nested-entry').textContent = fullmsg

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=entry.js
