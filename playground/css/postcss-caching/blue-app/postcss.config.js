export default {
  plugins: [replacePinkWithBlue],
}

function replacePinkWithBlue() {
  return {
    postcssPlugin: 'replace-pink-with-blue',
    Declaration(decl) {
      if (decl.value === 'pink') {
        decl.value = 'blue'
      }
    },
  }
}
replacePinkWithBlue.postcss = true

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=postcss.config.js
