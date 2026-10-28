import requireExternalCjs from '@vitejs/test-require-external-cjs'

export async function render(url) {
  let html = ''

  html += `\n<p class="require-external-cjs">message from require-external-cjs: ${requireExternalCjs}</p>`

  return html + '\n'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=entry-server.js
