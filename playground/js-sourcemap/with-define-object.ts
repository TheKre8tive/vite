// test complicated stack since broken sourcemap
// might still look correct with a simple case
function main() {
  mainInner()
}

function mainInner() {
  // @ts-expect-error "define"
  console.trace('with-define-object', __testDefineObject)
}

main()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=with-define-object.ts
