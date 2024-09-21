
## jQuery动画方法-show & hide
```js
/*
speed：Default value is 400 milliseconds, 可以设置为毫秒值，"slow"， "fast"
easing ：Default value is "swing"
*/
$(selector).show(speed,easing,callback) // 改变display，显示元素
$(selector).hide(speed,easing,callback) // 相当于display:none in CSS
$(selector).toggle(speed,easing,callback) // 使用show() 和 hide() 进行切换
```