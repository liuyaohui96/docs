
## Undefined
Undefined类型只有一个undefined值，表示声明变量单位对变量进行初始化。

以下场景返回undefine：
1. 声明一个变量，但是没有赋值
2. 访问对象上不存在的属性
3. 函数定义了形参，但没有传递实参
4. 函数没有返回值
5. 使用void对表达式求值。ECMAScript 明确规定 void 操作符 对任何表达式求值都返回 undefined 


```js
// 特殊地，初始化和尚未声明的变量使用typeof都返回`undefined`
let a
typeof a // undefined
typeof b // undefined
```