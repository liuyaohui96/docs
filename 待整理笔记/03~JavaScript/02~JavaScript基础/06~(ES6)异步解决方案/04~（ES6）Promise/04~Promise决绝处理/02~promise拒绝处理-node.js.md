## Node.js 的拒绝处理
Node.js 中，process 对象上存在两个关联到promise拒绝处理的事件
1. unhandleRejection: 当一个promise 被拒绝，事件循环中的一个轮次中没有任何拒绝处理函数被调用，该事件就会触发
    * 处理函数接受一个reason参数表示拒绝原因，另一个参数表示拒绝的promise
2. rejectionHandled: 当一个promise 被拒绝，并在实践循环的下一个轮次之后再有拒绝处理函数被调用，该事件就会被触发
    * 处理函数接受错误对象作为第一个参数，接受已拒绝的promise作为第二个参数

```js
// === unhandleRejecition 事件
let rejected;

process.on('unhandledRejection', function(reason, promise) {
  console.log(reason.message); // "Explosion!"
  console.log(rejected === promise); // true
});

rejected = Promise.reject(new Error('Explosion!'));

// === rejectionHandled 事件
let rejected;

process.on('rejectionHandled', function(promise) {
  console.log(rejected === promise); // true
});

rejected = Promise.reject(new Error('Explosion!'));

// wait to add the rejection handler
// 延迟添加拒绝处理函数
setTimeout(function() {
  rejected.catch(function(value) {
    console.log(value.message); // "Explosion!"
  });
}, 1000);

```


## 追踪潜在的未处理的拒绝
使用`rejecttionHandled & unhandledRejection`包含这些promise的一个列表，之后再检查此列表
```js
/* 
使用map 存储promise 及其拒绝原因
每个promise都是键，拒绝原因是相关的值，
每当unhandledRejection 被触发，promise 及其拒绝原因就会被添加到map中

每当rejectionHandled 被处罚，已经处理的promise 及其拒绝原因就会被从map中移除

*/

let possiblyUnhandledRejections = new Map();

// when a rejection is unhandled, add it to the map
process.on('unhandledRejection', function(reason, promise) {
  possiblyUnhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', function(promise) {
  possiblyUnhandledRejections.delete(promise);
});

setInterval(function() {
  possiblyUnhandledRejections.forEach(function(reason, promise) {
    console.log(reason.message ? reason.message : reason);

    // do something to handle these rejections
    handleRejection(promise, reason);
  });

  possiblyUnhandledRejections.clear();
}, 60000);

```