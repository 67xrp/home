// Set repeated values & placeholders
(function(){
  var issuer = 'TBA';
  document.getElementById('issuer').textContent = issuer;
  var el = document.getElementById('issuer2');
  if (el) el.textContent = issuer;

  // Placeholder links — update at launch
  var dex = '#', trust = '#';
  var dexEl = document.getElementById('dexLink');
  var tlEl  = document.getElementById('trustlineLink');
  if (dexEl) dexEl.setAttribute('href', dex);
  if (tlEl)  tlEl.setAttribute('href', trust);
})();