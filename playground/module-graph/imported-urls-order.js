import { msg } from 'virtual:slow-module'
import './empty.js'

export default msg

// This module tests that the import order is preserved in this module's `importedUrls` property
// as the imports can be processed in parallel

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=imported-urls-order.js
