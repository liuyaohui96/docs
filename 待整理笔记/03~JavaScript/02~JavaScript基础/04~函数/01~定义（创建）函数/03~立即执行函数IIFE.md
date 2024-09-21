
## 立即执行函数IIFE
IIFE是在函数声明后立即调用的函数表达式，当函数只使用一次时，通常使用IIFE (Immediately Invokable Function Expressions)。
```js
/*
函数表达式达式被创建就立即调用执行, 在 JavaScript 库中经常被使用。
在文件中包围整个内容创建一个闭包（创建里一个私有命名空间），从而避免与其他JavaScript 模块和库存在潜在命名冲突。
*/
const myLibrary = (function() {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
})()
privateVariable // ReferenceError
myLibrary.publicMethod() // 2
```