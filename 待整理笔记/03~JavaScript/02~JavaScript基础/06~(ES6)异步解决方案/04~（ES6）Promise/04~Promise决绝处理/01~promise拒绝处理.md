
## promise拒绝处理
当一个promise 被拒绝时，如果缺少拒绝处理函数，就会静默失败。

```js
let rejected = Promise.reject(42); // 虽然立即拒绝了，但很难准确知道何时被处理

// at this point, rejected is unhandled
// some time later...
rejected.catch(function(value) {
  // now rejected has been handled
  console.log(value);
});
```

