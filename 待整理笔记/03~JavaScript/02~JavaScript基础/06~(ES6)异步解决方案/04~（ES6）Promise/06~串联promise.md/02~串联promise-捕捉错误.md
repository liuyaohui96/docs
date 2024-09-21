## 捕获错误
Promise 链允许捕获前一个promise的完成或拒绝处理函数中发生的错误
```js
let p1 = new Promise(function(resolve, reject) {
  throw new Error('Explosion!');
});

p1.catch(function(error) {
  console.log(error.message); // "Explosion!"
  throw new Error('Boom!');
}).catch(function(error) {
  console.log(error.message); // "Boom!"
});
```