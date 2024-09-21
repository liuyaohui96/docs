
## Array.prototype.sort()
```js
// 用原地算法对数组的元素进行排序，并返回数组
// 如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序
// 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序
  // 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前
  // 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变
  // 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前
Array.prototype.sort([compareFunction])

// === 例子
// 要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列
function compareNumbers(a, b) {
  return a - b;
}

// === 例子2
var numbers = [4, 2, 5, 1, 3]; 
numbers.sort((a, b) => a - b); 
console.log(numbers);

// [1, 2, 3, 4, 5]
```