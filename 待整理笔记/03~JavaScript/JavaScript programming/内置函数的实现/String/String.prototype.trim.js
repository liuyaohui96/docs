// 把头部尾部多余的空格字符去除
String.prototype.myTrim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, '');
};

let str = '  hello world  ';
console.log(str.myTrim());
