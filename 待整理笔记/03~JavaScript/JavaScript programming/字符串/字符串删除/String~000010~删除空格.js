// 写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格

let str = '  abc d e f  g ';
function trimStr(str, flag) {
  let reg = /\s+/g;
  if (flag === 'left') reg = /^\s+/;
  if (flag === 'right') reg = /\s+$'/;
  if (flag === 'both') reg = /(^\s+)|(\s+$)/g;

  let result = str.replace(reg, '');
  if (flag === 'middle') {
    let RegLeft = str.match(/(^\s*)/g)[0]; // 保存右边空格
    let RegRight = str.match(/(\s*$)/g)[0]; // 保存左边空格
    result = RegLeft + result + RegRight;
  }
  return result;
}
console.log(trimStr(str));
console.log(trimStr(str, 'left'));
console.log(trimStr(str, 'right'));
console.log(trimStr(str, 'middle'));
console.log(trimStr(str, 'both'));
console.log(trimStr(str, 'all'));
