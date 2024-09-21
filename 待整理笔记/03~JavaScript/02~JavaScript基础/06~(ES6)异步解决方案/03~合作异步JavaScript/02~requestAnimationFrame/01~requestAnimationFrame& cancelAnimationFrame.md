
## requestAnimationFrame & cancelAnimationFrame
requestAniamtionFrame 用于在浏览器上高效运行动画的循环函数。在下一次重绘之前运行指定回调函数，不用管在什么环境下运行，以合适的帧率运行动画。

setInterval 并没有能够在设备上以最优的帧率运行，有时候会掉帧
```js
// callback 下一次重绘之前调用的回调函数
// 一个 long 整数，请求 ID 是回调列表中唯一的标识，可以传递给cancelAnimationFrame()取消回调函数
// callback 回调函数接受一个timeStamp参数
   // 该参数与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻
requestAnimationFrame(callback)

cancelAnimationFrame(requestID)
```

注意：若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()

## requestAnimationFrame 回调函数执行次数
回调函数执行次数通常是每秒60次，但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。

## 动画的运行速度
动画的平滑度直接取决于动画的帧率，帧率以每秒帧数（fps）为单位进行度量，数值越大，动画越平滑

大多数屏幕的刷新率为60HZ，这意味着1秒可以运行60帧（fps）

如果60HZ的机器要达到60FPS，则每帧动画代码运行的时间为（1000/60）约 16.7ms

requestAnimationFrame 会尽可能靠近60FPS这个值，尽可能做得最好。