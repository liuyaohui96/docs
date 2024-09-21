
## Array.prototype.includes()
判断一个数组是否包含一个指定的值，比较字符串和字符时是区分大小写

方法的参数是：
* valueToFind：需要查找的元素值
* fromIndex：可选，表示开始查找的位置，默认为0。
    * 如果为负值，则按升序从 array.length + fromIndex 的索引开始搜，如果计算出的索引小于 0，则整个数组都会被搜索。
    * 如果 fromIndex 大于等于数组的长度，则会返回 false，且该数组不会被搜索
```js
Array.prototype.includes(valueToFind[, fromIndex])

// === 例子
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
// 整个数组都会被搜索
let arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false
```