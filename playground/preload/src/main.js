import chunkMsg from './chunk'

document.querySelector('.chunk').textContent = chunkMsg

const ids = {
  hello: async () => {
    await import(/* a comment */ './hello.js')
  },
  about: async () => {
    await import('./about.js') // lazy load
  },
}

for (const [id, loader] of Object.entries(ids)) {
  const loadButton = document.querySelector(`#${id} .load`)
  loadButton.addEventListener('click', async () => {
    await loader()
    loadButton.insertAdjacentHTML('afterend', '<output>loaded</output>')
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main.js
