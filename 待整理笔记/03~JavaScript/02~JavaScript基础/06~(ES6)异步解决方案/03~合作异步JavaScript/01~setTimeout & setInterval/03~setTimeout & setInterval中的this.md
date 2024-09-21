## setTimeout中的this
setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。这会导致，这些代码中包含的 this 关键字在非严格模式会指向 window (或全局)对象，严格模式下为 undefined，这和所期望的this的值是不一样的

```js
// setTimeout 的显示绑定不可以，因为你并不能将func也绑定this

// === 使用包装函数
setTimeout(function(){obj.method()}, 2000); 

// === 箭头函数
setTimeout(() => {obj.method()}, 2000); 

// === bind 例子
let myArray = ['zero', 'one', 'two'];
myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1500, "1"); // prints "one" after 1.5 seconds
```

setInterval 同样如此，不再列举