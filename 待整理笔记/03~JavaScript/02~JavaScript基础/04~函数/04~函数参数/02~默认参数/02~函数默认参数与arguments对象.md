
## 函数默认参数与arguments对象
```js
// === ES5非严格模式下，arguments对象会反映具名参数的变化
// 函数内更新形参，也会相应改变arguments对象中相应的值
function mixArgs(first, second) {
  console.log(first === arguments[0]); // true
  console.log(second === arguments[1]); // true
  first = 'c';
  second = 'd';
  console.log(first === arguments[0]); // true
  console.log(second === arguments[1]); // true
}
mixArgs('a', 'b');

// === 而ES5严格模式不会将变化反应到arguments对象中，例子不再列举

// === ES6规定默认参数触发该参数与arguments对象与形参分离
function mixArgs(first, second = 'b') {
  console.log(arguments.length); // 1
  console.log(first === arguments[0]); // true
  console.log(second === arguments[1]); // false
  first = 'c';
  second = 'd';
  console.log(first === arguments[0]); // false !!!!!
  console.log(second === arguments[1]); // false !!!!!
}
mixArgs('a');
```