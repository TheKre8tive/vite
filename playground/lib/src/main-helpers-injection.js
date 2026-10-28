// Trigger wrong helpers injection if not properly constrained
;(function () {
  var getEvalledConstructor = function (expressionSyntax) {
    try {
      return $Function(
        '"use strict"; return (' + expressionSyntax + ').constructor;',
      )()
    } catch (e) {}
  }
  console.log(getEvalledConstructor(0))
})()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=main-helpers-injection.js
