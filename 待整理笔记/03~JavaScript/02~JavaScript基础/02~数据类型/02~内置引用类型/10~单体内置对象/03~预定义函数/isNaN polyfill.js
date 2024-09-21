// 这个polyfill利用了NaN自身永不相等于自身这一特征
function isNaN(value) {
  var n = Number(value);
  return n !== n;
}
