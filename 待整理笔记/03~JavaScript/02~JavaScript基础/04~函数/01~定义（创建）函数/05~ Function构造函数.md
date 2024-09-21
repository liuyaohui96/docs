
## Function构造函数
`Function`构造器允许动态创建新函数
注意: 不推荐使用 Function 构造函数创建函数,因为它需要的函数体作为字符串可能会阻止一些JS引擎优化,也会引起其他问题。

```js
new Function (arg1, arg2, ... argN, functionBody)

// === 例子
var add = new Function('first', 'second', 'return first + second');

console.log(add(1, 1)); // 2

// === ES6 配合默认参数与剩余参数
var add = new Function('first', 'second = first', 'return first + second');

console.log(add(1, 1)); // 2
console.log(add(1)); // 2
```
