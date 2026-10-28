import type { Plugin } from '../plugin'

/**
 * make sure systemjs register wrap to had complete parameters in system format
 */
export function completeSystemWrapPlugin(): Plugin {
  const SystemJSWrapRE = /System.register\(.*?(\(exports\)|\(\))/g

  return {
    name: 'vite:force-systemjs-wrap-complete',

    renderChunk(code, _chunk, opts) {
      if (opts.format === 'system') {
        return {
          code: code.replace(SystemJSWrapRE, (s, s1) =>
            s.replace(s1, '(exports, module)'),
          ),
          map: null,
        }
      }
    },
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=completeSystemWrap.ts
