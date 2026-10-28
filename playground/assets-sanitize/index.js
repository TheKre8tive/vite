import plusCircle from './+circle.svg'
import underscoreCircle from './_circle.svg'
function setData(classname, file) {
  const el = document.body.querySelector(classname)
  el.style.backgroundImage = `url(${file})`
  el.textContent = file
}
setData('.plus-circle', plusCircle)
setData('.underscore-circle', underscoreCircle)

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
