
## process.nextTick()
process.nextTick 方法在当前"执行栈"的尾部触发,所以指定的任务总是发生在所有异步任务之前，这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行

