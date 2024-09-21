## apply
```js
func.apply(thisArg, [argsArray])

// === 用 apply 将数组添加到另一个数组
// 传递一个数组来push，它实际上会将该数组作为单个元素添加，而不是添加数组中的每个元素
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]

// === 使用内置函数完成遍历数组的任务
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
```