/**
 * @description return missing letter in continuous string
 * @chinese 返回缺失的连续字符
 * @param {string} str
 * @return {string} the missing letter
 */

let str = 'abcefg';

function getMissingLetter(str) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str.charCodeAt(i) + 1 != str.charCodeAt(i + 1))
      return String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return false;
}

console.log(getMissingLetter(str));
