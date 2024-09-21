
## 函数默认参数的TDZ
函数的参数在初始化前不能访问，否则会抛出`ReferenceError`错误，参数的初始化在函数调用时进行。

```js
// seconde 存在暂时性死区
function add(first = second, second) {
  return first + second;
}

console.log(add(1, 1)); // 2
console.log(add(undefined, 1)); // Reference Error
```