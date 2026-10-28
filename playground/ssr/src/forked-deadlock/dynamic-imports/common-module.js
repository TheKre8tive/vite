/**
 * module H
 */
export async function commonModuleExport() {
  const [{ stuckModuleExport }, { deadlockfuseModuleExport }] =
    await Promise.all([
      import('./stuck-module'),
      import('./deadlock-fuse-module'),
    ])

  stuckModuleExport()
  deadlockfuseModuleExport()
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=common-module.js
