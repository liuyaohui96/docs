
## 浏览器的拒绝处理
浏览器同样触发两个事件，识别未处理的拒绝，这两个事件会被window对象触发，等效于node.js的相关事件
1. unhandledrejection: 当一个promise 被拒绝，事件循环中的一个轮次中没有任何拒绝处理函数被调用，该事件就会触发
    * 处理函数接受一个reason参数表示拒绝原因，另一个参数表示拒绝的promise
2. rejectionhandled: 当一个promise 被拒绝，并在事件循环的下一个轮次之后再有拒绝处理函数被调用，该事件就会被触发
    * 处理函数接受错误对象作为第一个参数，接受已拒绝的promise作为第二个参数

node.js 传递给处理函数的是分离的参数，而浏览器中只会传递一个事件对象，包含以下特性：
* type：事件的名称  unhandledrejection|rejectionhandled
* promise: 被拒绝的promise对象
* reason: promise 中的拒绝值（拒绝原因）

```js
let rejected;

window.onunhandledrejection = function(event) {
  console.log(event.type); // "unhandledrejection"
  console.log(event.reason.message); // "Explosion!"
  console.log(rejected === event.promise); // true
};

window.onrejectionhandled = function(event) {
  console.log(event.type); // "rejectionhandled"
  console.log(event.reason.message); // "Explosion!"
  console.log(rejected === event.promise); // true
};

rejected = Promise.reject(new Error('Explosion!'));

```

## 追踪未处理的拒绝
追踪未处理的拒绝，与node.js一样
```js
let possiblyUnhandledRejections = new Map();

// when a rejection is unhandled, add it to the map
window.onunhandledrejection = function(event) {
  possiblyUnhandledRejections.set(event.promise, event.reason);
};

window.onrejectionhandled = function(event) {
  possiblyUnhandledRejections.delete(event.promise);
};

setInterval(function() {
  possiblyUnhandledRejections.forEach(function(reason, promise) {
    console.log(reason.message ? reason.message : reason);

    // do something to handle these rejections
    handleRejection(promise, reason);
  });

  possiblyUnhandledRejections.clear();
}, 60000);
```