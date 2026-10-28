const escapeHtmlReplaceMap = {
  '&': '&amp;',
  "'": '&#x27;',
  '`': '&#x60;',
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;',
}

/**
 * @param {string} string
 * @returns {string}
 */
export function escapeHtml(string) {
  return string.replace(/[&'`"<>]/g, (match) => escapeHtmlReplaceMap[match])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=utils.js
