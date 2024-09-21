
## Object.js
严格相等运算符`===`并不完全准确，它认为`+0 === -0` 是true，`NaN===NaN`是false

ES6 引入了ES6来解决严格相等运算符的问题
```js
console.log(Object.is(+0, -0));     // false
console.log(Object.is(NaN, NaN));   // true
console.log(Object.is(5, 5));       // true
console.log(Object.is(5, "5"));     // false
```

选择`Object.is() | == | === ` 取决于实际情况