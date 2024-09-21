

## Array.prototype.reduce
Array.prototype.reduce() 迭代数组，记录上一次迭代的结果进行处理，从而完成对整个数组迭代处理，最后一次返回值作为最终返回值

```js
// accumulator 上一次调用callback的返回结果
Array.prototype.reduce(prev, next[, index[, array]])[, initialValue])

// 例子
// 计算数组中所有值的总和
let arr = [10, 20, 30];
let sumArr = arr.reduce((prev, next) => prev + next, 0);
console.log(sumArr); // 60
```