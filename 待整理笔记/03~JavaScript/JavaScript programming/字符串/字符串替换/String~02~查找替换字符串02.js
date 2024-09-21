/*
用例：
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

/**
 * @description turn str into spianl case
 * @param str
 */

function spinalCase(str) {
  // join space between lower char & upper char
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(/\s+|_/g, '-').toLowerCase();
}

function spinalCase2(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
