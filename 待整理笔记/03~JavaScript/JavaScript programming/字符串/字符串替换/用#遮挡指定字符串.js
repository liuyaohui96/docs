// 创建一个函数，用 ‘#’ 符号遮住字符串（除最后4个字符之外）
const mask = (str, maskChar = '#') =>
  str.slice(-4).padStart(str.length, maskChar);

console.log(mask('hello world'));
