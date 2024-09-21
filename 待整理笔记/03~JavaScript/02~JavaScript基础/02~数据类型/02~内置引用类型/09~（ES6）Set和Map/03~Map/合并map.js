let first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

let second = new Map([[1, 'uno'], [2, 'dos']]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
