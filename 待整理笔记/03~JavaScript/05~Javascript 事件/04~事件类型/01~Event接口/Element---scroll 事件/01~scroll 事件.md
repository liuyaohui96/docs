
## scroll 事件
当元素被滚动时触发


## 限制滚动事件
由于滚动事件可以以很高的速率触发，因此事件处理程序不应执行计算量大的操作，通常使用`requestAnimationFrame(), setTimeout(), or a CustomEvent`对事件进行限制

```js
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  
  // 利用requestAnimationFrame保证在下一帧前运行一次scrollhanlder
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```