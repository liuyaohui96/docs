
## setInterval()
setInterval()设计一个重复调用一个函数或执行一个代码段计时器

clearInterval(timerId) 清除指定timerId的interval计时器
```js
// func 重复调用的函数
// delay 可选的，   延迟，毫秒
// arg1... 可选的提供给func的参数
// 返回一个intervalID 非0数值，可以传递给clearInterval()作为参数清除指定interval
setInterval(func, delay, [arg1, arg2, ...]);

clearInterval(timerId)
```