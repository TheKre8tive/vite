import { test } from './dep.js'

function main() {
  test()
}

main()

import.meta.hot.accept('./dep.js')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
