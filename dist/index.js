/**
 * get a cookie value by name
 * @param {String} key - cookie key name
 * @return {String} - cookie value
 */
function getCookieItem(key) {
  if (key === null || key === undefined) return '';
  var cookie = document.cookie;
  if (cookie === null || cookie === '') return '';
  var captureReg = new RegExp("(?:(?:^|.*;\\s*)".concat(key, "\\s*\\=\\s*([^;]*).*$)|^.*$"));
  var value = document.cookie.replace(captureReg, '$1');
  return value;
}

export { getCookieItem };
//# sourceMappingURL=index.js.map
