function combine() {
  let arr = [].concat.apply([], arguments); //没有去重复的新数组
  return Array.from(new Set(arr));
}

var m = [1, 2, 2],
  n = [2, 3, 3];
console.log(combine(m, n)); // [1, 2, 3]
