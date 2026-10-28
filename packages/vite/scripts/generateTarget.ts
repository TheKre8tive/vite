import { getCompatibleVersions } from 'baseline-browser-mapping'

// Update on each major release
const targetDate = '2025-05-01'

// https://esbuild.github.io/api/#target
const esbuildSupportedBrowsers = new Set([
  'chrome',
  'edge',
  'firefox',
  'safari',
])

const results = getCompatibleVersions({
  widelyAvailableOnDate: targetDate,
})

const esbuildTargets = results
  .filter((target) => esbuildSupportedBrowsers.has(target.browser))
  .map((target) => `${target.browser}${target.version}`)

console.log('ESBuild Targets:', esbuildTargets)

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=generateTarget.ts
