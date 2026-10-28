const path = require('node:path')

module.exports.hello = () => require(path.resolve(__dirname, './foo.js')).hello

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
