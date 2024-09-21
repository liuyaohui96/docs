
## 创建未决的promise对象
promise 使用 Promise 构造函数创建，构造函数接受一个叫做执行器（executor）的函数，该函数有两个参数
1. resolve 函数。在执行器成功结束时被调用，用于示意promise 进入 fullfilled 状态。
2. reject 函数。在执行器失败时被调用，用于示意promise 进入 rejected 状态

promise 执行器中的代码会立即执行，promise 根据 resolve | reject 进入 fullfilled | rejected 状态后，相应的处理程序被加入到作业队列中。
```js
new Promise( function(resolve, reject) {...} /* executor */  );

// === 例子
/*
Promise
Hi!
Resolved.
*/
let promise = new Promise(function(resolve, reject) {
  // 立即执行
  console.log('Promise');
  resolve();
});

// 添加到作业队列
promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');
```