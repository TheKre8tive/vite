export function fn() {
  const m = new Map()
  m.set('foo', 'Hello')
  document.querySelector('#app').textContent = m.get('foo')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=async.js
