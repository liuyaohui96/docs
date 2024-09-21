/**
 * @description convert html special characte
 * @argument {string} str
 * @retrun {strring} the converted string
 */

function convertHtmlStr(str) {
  let htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str
    .split('')
    .map(item => htmlEntities[item] || item)
    .join('');
}

function convertHtmlStr2(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

console.log(convertHtmlStr('hello & world'));
console.log(convertHtmlStr2('hello & world'));
