
我们知道，Symbol 的描述只被存储在内部的 [[Description]]，没有直接对外暴露，我们只有调用 Symbol 的 toString() 时才可以读取这个属性：

```js
Symbol('desc').description;  // "desc"
Symbol('').description;      // ""
Symbol().description;        // undefined
```