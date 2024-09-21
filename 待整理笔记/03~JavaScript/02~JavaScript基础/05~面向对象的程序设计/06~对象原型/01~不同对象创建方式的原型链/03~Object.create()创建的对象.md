
## Object.create()创建的对象
```js
// a ---> Object.prototype ---> null
let a = {a: 1}; 

// b ---> a ---> Object.prototype ---> null
let b = Object.create(a);
```