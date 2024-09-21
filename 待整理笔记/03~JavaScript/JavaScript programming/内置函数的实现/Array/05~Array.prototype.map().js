Array.prototype.myMap = function(callback) {
  let result = [];
  this.forEach(item => {
    result.push(callback(item));
  });
  return result;
};

let arr = [1, 2, 3, 4];
let result = arr.myMap(n => n * 2);
console.log(result); // [2, 4, 6, 8]

// 用reduce实现
Array.prototype._map = function(callback) {
  let rt = [];
  this.reduce((pre, next) => {
    rt.push(callback(next));
  }, null);
  return rt;
};

console.log(arr._map(n => n * 2)); // // [2, 4, 6, 8]s
