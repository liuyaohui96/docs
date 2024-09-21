
## 异步编程解决方案

解决方案：
1. 事件模型
2. 异步回调
3. 合作异步JavaScript
  * setTimeout() & setInterval() & requestAnimationFrame()
4. promise
  * 而且使用Promise的链式调用，其实并没有从根本上解决回调地狱的问题，只是换了一种写法
5. generator （详细见迭代器和生成器部分）
  * Generator 函数可以是异步任务的容器，需要暂停的地方，使用yield语句注明。但是 Generator 使用起来较为复杂
6. async / await
  * async/await，async是 Generator 函数的语法糖，async/await 使得异步代码看起来像同步代码
