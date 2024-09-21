
## Array.of()
不考虑参数的数量或类型,创建一个具有可变数量参数的新数组实例

Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）

```js
Array.of(element0[, element1[, ...[, elementN]]])

// === 例子
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]
```