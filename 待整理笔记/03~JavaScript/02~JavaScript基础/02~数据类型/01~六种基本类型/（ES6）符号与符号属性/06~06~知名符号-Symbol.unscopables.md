
## Symbol.upscopables
with 语句原本设计用来减少重复代码，后来却备受批评，因为它让代码变得难以理解，而且拥有负面影响，同时容易出错

最终，with在严格模式下被禁用

尽管将来的代码会停用with，但在非严格模式下，ES6任然提供了对with语句的支持，以便向下兼容

ES6为数组添加了一个values 方法（参考迭代器与生成器部分），这意味着在ES6环境下，with语句内部的values不会指向局部变量的values，而是指向数组的value方法，这就是`Symbol.upscopables`出现的理由

`Symbol.upscopables`符号在Array.protyotype 上使用，可以指定哪些属性不允许在with内被绑定

```js
// built into ECMAScript 6 by default
// 默认值，一般来说，不需要再自定义多想上设置`Symbol.unscopables`属性，除非使用了with语句
// 并且修改了代码库中已有的对象
Array.prototype[Symbol.unscopables] = Object.assign(Object.create(null), {
  copyWithin: true,
  entries: true,
  fill: true,
  find: true,
  findIndex: true,
  keys: true,
  values: true
});
```