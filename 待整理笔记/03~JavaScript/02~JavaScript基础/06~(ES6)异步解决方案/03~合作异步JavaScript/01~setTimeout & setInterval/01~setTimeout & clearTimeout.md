
## setTimeout() & clearTimeout()
setTimeout() 设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码

clearTimeout(timerId) 清楚指定timerId的计时器
```js
// function 是 指定delay后运行的函数
// parm1... 是可选的，附加给function的参数
// 返回值timeoutID是一个正整数，表示定时器的编号。这个值可以传递给clearTimeout()来取消该定时器
setTimeout(function[, delay, param1, param2, ...])

// clearTimeout(timerId) 
```

## setTimeout 变通方法
```js
// 匿名函数包裹回调函数
let intervalID = setTimeout(function() { myFunc('one', 'two', 'three'); }, 1000);

// 使用箭头函数
let intervalID = setTimeout(() => { myFunc('one', 'two', 'three'); }, 1000);

//  function's bind：
setTimeout(function(arg1){}.bind(undefined, 10), 1000);
```

## SetTimeout的实际延时比设定值更久
SetTimeout的实际延时比设定值更久的原因：setTimeout() 只是将事件插入了“任务队列”，必须等当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码消耗时间很长，也有可能要等很久，所以并没办法保证回调函数一定会在 setTimeout() 指定的时间执行。所以， setTimeout() 的第二个参数表示的是最少时间，并非是确切时间。

HTML5标准规定了 setTimeout() 的第二个参数的最小值不得小于4毫秒，如果低于这个值，则默认是4毫秒