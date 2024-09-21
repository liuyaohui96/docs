
## webworker
单线程在保证了执行顺序的同时也限制了javascript的效率，因此开发出了web worker技术， 在独立于主线程的后台线程中，运行一个脚本。


web worker技术开的多线程有着诸多限制：
1. 新线程都受主线程的完全控制，不能独立执行。这意味着这些“线程” 实际上应属于主线程的子线程
2. 子线程并没有执行I/O操作的权限，只能为主线程分担一些诸如计算等任务。严格来讲，这项技术并非改变了javascript语言的单线程本质


## 使用worker构造函数创建webworker
```js
// Worker() 构造函数创建一个 Worker 对象，该对象执行指定的URL脚本。这个脚本必须遵守 同源策略
const myWorker = new Worker(aURL, options);
```

## worker 与主线程传递信息
主线程和 worker 线程相互之间使用 postMessage() 方法来发送信息, 并且通过 onmessage 这个 event handler来接收信息
```js
/*
worker 通过message 和error事件与页面通信
*/
worker.onmessage = function(event){
  const data = event.data;
  // 对数据进行处理
}
worker.onerror =function(event){
    // event.filename 代码文件
    // event.lineno 代码行号
    // event.message 错误信息
}

```

## 停止worker工作
```js
// 停止worker，不会触发其他过程，包括load & error
worker.terminate()
```

## worker 的全局作用域
worker 中的代码不能访问DOM，worker中全局对象就是它本身，具有页面的一些功能，但是有限：
1. navigator的一些功能
2. 只读的location
3. setTimeout, setInternal(), clearTimeout(), clearInternal()
4. XMLHTTPRequest构造函数
