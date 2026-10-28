const relative = import.meta.glob('./**/*.js', { eager: true })
const alias = import.meta.glob('@escape_[brackets]_mod/**/*.js', {
  eager: true,
})
export { relative, alias }

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=glob.js
