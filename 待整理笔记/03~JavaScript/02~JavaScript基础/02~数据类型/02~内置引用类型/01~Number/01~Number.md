
## Number 对象
Number 对象是将数字值封装的对象，Number 对象由`Number()`构造器创建

```js
// 如果参数无法被转换为number，则返回NaN
new Number(value);
Number(value); // 如果没有 new 操作符，用于number类型转换

// === 例子
let a = new Number('123');
console.log(a instanceof Number); // a的原型链中存在等于 Number 构造函数的原型对象
console.log(a === 123); // false,两个不同的类型

let b = Number('123');
console.log(b === 123); // true, b已经转换为number类型
```