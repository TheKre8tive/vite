import noExternalReactServerMessage from '@vitejs/test-ssr-conditions-no-external/server'
import externalReactServerMessage from '@vitejs/test-ssr-conditions-external/server'

export async function render(url) {
  let html = ''

  html += `\n<p class="no-external-react-server">${noExternalReactServerMessage}</p>`

  html += `\n<p class="browser-no-external-react-server"></p>`

  html += `\n<p class="external-react-server">${externalReactServerMessage}</p>`

  html += `\n<p class="browser-external-react-server"></p>`

  return html + '\n'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=app.js
