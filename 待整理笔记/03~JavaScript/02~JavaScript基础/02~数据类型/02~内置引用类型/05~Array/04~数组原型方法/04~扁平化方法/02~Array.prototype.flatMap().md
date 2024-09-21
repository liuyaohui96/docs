
## Array.prototype.flatMap()
使用映射函数映射每个元素，然后将结果压缩成一个新数组

```js
Array.prototype.flatMap(callback(item[, idx, arr][, thisArg]))
```

## map() 与 flatMap()

```js
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);  // [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]]
```

## 替代方案 
这是低效的，并且应该避免大型阵列：在每次迭代中，它创建一个必须被垃圾收集的新临时数组，并且它将元素从当前的累加器数组复制到一个新的数组中，而不是将新的元素添加到现有的数组中。
```js
let arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
```