export default {
  plugins: [replacePinkWithGreen],
}

function replacePinkWithGreen() {
  return {
    postcssPlugin: 'replace-pink-with-green',
    Declaration(decl) {
      if (decl.value === 'pink') {
        decl.value = 'green'
      }
    },
  }
}
replacePinkWithGreen.postcss = true

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=postcss.config.js
