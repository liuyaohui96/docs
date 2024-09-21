
## Node.js的运行机制
Node 中的 Event Loop 和浏览器中的是完全不相同的东西。Node.js采用V8作为js的解析引擎，而I/O处理方面使用了自己设计的libuv，node中事件循环的实现是依靠的libuv引擎

Node.js的运行机制如下:
1. node选择chrome v8引擎作为js解释器，V8引擎解析JavaScript脚本
2. 解析后的代码调用对应的node api
3. libuv引擎负责Node API的执行，将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎
4. V8引擎再将结果返回给用户