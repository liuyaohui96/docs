
## 严格模式下的eval
严格模式下的 eval 不再为上层范围引入新变量。正常模式下,  代码 `eval("var x;")`会给上层函数或者全局引入一个新的变量 x,  这意味着, 在一个包含 eval 调用的函数内所有没有引用到参数或者局部变量的名称都必须在运行时才能被映射到特定的定义。严格模式下 eval 仅仅为被运行的代码创建变量, 所以 eval 不会使得名称映射到外部变量或者其他局部变量
```js
let evalX = eval('var x = 42; x');
console.log(x); // 42
console.log(evalX); // 42

let evalX = eval("'use strict'; var x = 42; x");
console.log(evalX); // 42
console.log(x); // ReferenceError: x is not defined
```