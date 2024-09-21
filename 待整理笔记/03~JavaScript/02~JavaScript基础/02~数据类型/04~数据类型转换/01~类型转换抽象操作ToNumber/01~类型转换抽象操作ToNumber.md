## 抽象操作ToNumber
1. String 类型转换为Number类型：进行整体转换，特殊地，`''`转换为0，如果转换不成功，返回NaN
2. Boolean类型转换为Number类型：true 转换为 1，false 转换为 0
3. undefined 转换为Number类型： NaN，null 转换为 0
4. 对象转换为Number类型：对象（包括数组）会首先被转换为相应的基本类型值。
  * 先执行valueOf()，看是否能转换为基本类型值
  * 如果不可以，再执行toString()，看是否可以转换为相应的基本类型值。
  * 如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为Number类型。

## 执行 ToNumber 抽象操作的行为
1. 强制转换
  * Number() 
2. 自动转换（隐式转换）
  * 一元操作符 `++ --`
  * 一元加或减操作符 `+ -`
  * 算术运算符`+ - * / %` 跟非Number类型的值进行运算时，会将这些值转换为Number。特殊地当算术运算符`+`操作数不是字符串类型时才能自动转换

```js
// === Number()
Number('123') // 123
Number('123abc') // NaN
Number('') // 0

Number(true) Number(false) // 1 0
Number(null) // 0
Number(undefined) // NaN

// 对象转换为数值，调用其valueOf方法，如果返回值不是数值
// 则调用toString方法
let obj = {};
obj.__proto__.valueOf = function() {
  return 10;
};
obj.__proto__.toString = function() {
  return 20;
};
console.log(Number(obj));
```






