/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore `lightningcss` may not be installed
import type Lightningcss from 'lightningcss'

/* eslint-enable @typescript-eslint/ban-ts-comment */

export type LightningCSSOptions = Omit<
  Lightningcss.BundleAsyncOptions<Lightningcss.CustomAtRules>,
  | 'filename'
  | 'resolver'
  | 'minify'
  | 'sourceMap'
  | 'analyzeDependencies'
  // properties not overridden by Vite, but does not make sense to set by end users
  | 'inputSourceMap'
  | 'projectRoot'
>

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=lightningcssOptions.d.ts
