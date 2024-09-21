
## Object.assign()
混入(mixin) 是组合对象的一种模式，指从一个对象中接受属性和方法。

ES6前使用以下函数完成混入
```js
// 迭代提取suppplier对象的属性，将其放到指定的receiver对象中
function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function(key) {
    receiver[key] = supplier[key];
  });
  return receiver;
}
```

ES6 新增了`Object.assign()`方法完成对象的混入，它接受任意数量的supplier对象，依次按照参数顺序接受属性，这意味着后续的同名对象属性会覆盖前面的同名对象属性

```js
var receiver = {};

Object.assign(
  receiver,
  {
    type: 'js',
    name: 'file.js'
  },
  {
    type: 'css'
  }
);

console.log(receiver.type); // "css"
console.log(receiver.name); // "file.js"
```
