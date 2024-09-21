
## Promise.prototype.then()
Promise.prototype.then() 返回一个 promise

需要两个参数：
* onFulfilled：可选，promsise fullfilled时调用的函数。该函数有一个参数，即接受的最终结果
* onRejected： 可选，promsise rejected时调用的函数，该函数有一个参数，即拒绝的原因  
```js
Promise.prototype.then(onFulfilled[, onRejected]);

// === 处理fullfill 和 reject
Promise.prototype.then(value => {
  // fulfilled
}, reason => {
  // rejected
});

// === 仅处理fullfilled
Promise.prototype.then(value => {
  // fulfilled
});

// === 仅处理rejected
Promise.prototype.then(null,value => {
  // rejected
});
```