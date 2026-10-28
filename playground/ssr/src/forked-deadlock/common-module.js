import { stuckModuleExport } from './stuck-module'
import { deadlockfuseModuleExport } from './deadlock-fuse-module'

/**
 * module H
 */
export function commonModuleExport() {
  stuckModuleExport()
  deadlockfuseModuleExport()
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=common-module.js
