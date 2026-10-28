import { displayCount } from './re-export.js'

const button = document.querySelector('.intermediate-file-delete-increment')

const render = () => {
  document.querySelector('.intermediate-file-delete-display').textContent =
    displayCount(Number(button.textContent))
}

render()

button.addEventListener('click', () => {
  button.textContent = `${Number(button.textContent) + 1}`
  render()
})

if (import.meta.hot) import.meta.hot.accept()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
