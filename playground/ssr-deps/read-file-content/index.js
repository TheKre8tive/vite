const path = require('node:path')

module.exports = async function readFileContent(filePath) {
  const fs = require('node:fs/promises')
  return await fs.readFile(path.resolve(filePath), 'utf-8')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
