
## requestAnimationFrame 与 setInterval & setTimeout区别
主要是时间间隔设置上的不同：
1. setInterval & setTimeout 需要手动设置时间间隔。大部分的电脑显示器的刷新频率是60HZ，也就是每秒钟重绘60次, 所以最平滑动画的最佳循环间隔是 1000ms / 60 ，约为16.7ms。setTimeout/setInterval 有一个显著的缺陷在于时间是不精确的, setTimeout/setInterval 只能保证延时或间隔不小于设定的时间。因为它们实际上只是把任务添加到了任务队列中，但是如果前面的任务还没有执行完成，它们必须要等待。

2. requestAnimationFrame() 不用指定Interval， 采用的是系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。


综上，requestAnimationFrame 和 setTimeout/setInterval 在编写动画时相比，优点如下:
1. requestAnimationFrame 不需要设置时间，采用系统时间间隔，能达到最佳的动画效果
2. requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成
3. 当 requestAnimationFrame() 运行在后台标签页或者隐藏的 `<iframe>` 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命（大多数浏览器中）
4. requestAnimationFrame 由浏览器自动进行优化