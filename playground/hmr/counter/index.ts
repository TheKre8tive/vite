const btn = document.querySelector('button')
let count = 0
const update = () => {
  btn.textContent = `Counter ${count}`
}
btn.onclick = () => {
  count++
  update()
}
function neverCalled() {
  import('./dep')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.ts
