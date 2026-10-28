import process from 'node:process'
import dep from '@vitejs/test-alias-original'
import nonDep from '@vitejs/test-alias-non-dep'

export default {
  dep,
  nonDep,
  builtin: process.env['__TEST_ALIAS__'],
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main.js
