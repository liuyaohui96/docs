
## Promise.prototype.catch()
Promise.prototype.catch(onRejected) 返回一个Promise，并且处理拒绝的情况

增加catch方法的意图是配合then方法，使得成功或失败的编得更加清晰。如果未给promise附加rejected状态的处理函数，那么错误就会静默发生，建议始终附加一个拒绝处理函数，即使是仅用于打印错误日志。
```js
Promise.prototype.catch(err => {
  // rejection
  console.error(err.message);
});

// promise 的catch 方法等同于只传递rejected状态的处理函数给promise.then
Promise.prototype.then(null, err => {
  // rejection
  console.error(err.message);
});
```

