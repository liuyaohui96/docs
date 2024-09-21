
## 执行器错误
如果在执行器内部抛出饿了错误，promise的拒绝处理函数就会被调用
```js
// 由于执行器内没有显示的try catch，因此错误就被捕获传递给了rejected处理函数
let promise = new Promise(function(resolve, reject) {
  throw new Error('Explosion!');
});

promise.catch(function(error) {
  console.log(error.message); // "Explosion!"
});

// === 上面的例子等价于
let promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('Explosion!');
  } catch (ex) {
    reject(ex);
  }
});

promise.catch(function(error) {
  console.log(error.message); // "Explosion!"
});

```