primise源码实现参考：https://github.com/YvetteLau/Blog/issues/2

## promise
promise 是JavaScript 异步编程的一种实现方法，是异步操作结果准备的占位符

promise 优缺点：
优点：一旦状态改变，就不会再变，任何时候都可以得到这个结果，将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

缺点：无法取消 Promise，当处于pending状态时，无法得知目前进展到哪一个阶段


## promise状态
1. promsie初始为 挂起状态(pending state), 表示异步操作还没有开始，挂起状态也可以认为是未决的(unsettled)

2. 异步操作结束后，promise就是已决的（settled），进入以下两种状态之一：
    * fullfilled：已完成状态
    * rejected：表示未完成

