## setInterval 动画
早期的动画循环，使用`setInterval()`方法控制所有动画。编写循环动画的关键是知道延迟时间多久才合适，一方面，循环时间必须足够短，动画才能平滑，另一方面，循环间隔足够才，才能确保浏览器有能力渲染产生变化。

大多数浏览器显示器的刷新频率是60HZ，大概相当于每秒重绘60次，因此最佳的循环间隔时间是 `1000ms/60 = 17ms`, 这个循环间隔重绘的动画是最平滑的。

```js
// 简单的动画，从 0px ---> 400px, 注意元素设置为脱离正常文档流
const divE = document.querySelector('div');
let left = 0;
const timer = setInterval(() => {
  divE.style.left = (left += 10) + 'px';
  if (left === 400) {
    clearInterval(timer);
  }
}, 16);
```