const modules = import.meta.glob('./*.(js|ts)', { eager: true })
const globWithAlias = import.meta.glob('@dir/al*.js', { eager: true })

// test negative glob
import.meta.glob(['@dir/*.js', '!@dir/x.js'])
import.meta.glob(['!@dir/x.js', '@dir/*.js'])

// test for sourcemap
console.log('hello')

export { modules, globWithAlias }

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
