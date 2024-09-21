// 要求最终输出 [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]
const a = [1, 2, 3, 4, 5];
Array.prototype.multiply = function() {
  this.push(...this.map(item => item * item));
};
a.multiply();
console.log(a);
