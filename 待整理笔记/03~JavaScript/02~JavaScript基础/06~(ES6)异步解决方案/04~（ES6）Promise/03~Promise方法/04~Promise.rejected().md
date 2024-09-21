
## Promise.rejected()
Promise.rejected() 会返回一个处于rejected状态的promise

需要的参数：
* reason：表示Promise被拒绝的原因。
```js
Promise.reject(reason)

// === 例子
let promise = Promise.reject(1);
promise.catch(value => {
  console.log(value); // 1
});
```