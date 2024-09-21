Array.prototype.mySlice = function(...args) {
  let start = args[0];
  let end = args.length == 2 ? args[1] : this.length;
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};

console.log([1, 2, 3].mySlice(1)); // [2,3]
