/**
 * @description find the subString and replace with target str
 * @chinese 找到目标子串并替换他们
 * @argument {string} subStr
 * @argument {string} targetStr
 */

function replaceStr(str, subStr, targetStr) {
  if (/[A-Z]/.test(subStr[0])) {
    targetStr = targetStr[0].toUpperCase() + targetStr.slice(1);
  }
  return str.replace(subStr, targetStr);
}
let result = replaceStr('Hello World', 'World', 'liuyaohui');
console.log(result);

// ======= 使用不少于三种方式替换文本"dream"改成"package",提供字符串"I have a dream"
// 正则替换
let str = 'I have a dream';
let temp = str.replace(/dream/g, 'package');
console.log(temp);

// 遍历替换
temp = str
  .split(' ')
  .map(item => {
    return item === 'dream' ? 'package' : item;
  })
  .join(' ');
console.log(temp);

// 数组查询切割法
tempArr = str.split(' ');
let removeIdx = tempArr.indexOf('dream');
tempArr.splice(removeIdx, 1, 'package');
temp = tempArr.join(' ');
console.log(temp);
