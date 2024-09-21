
## jQuery动画方法
注意，颜色动画没有在Jquery的核心库中
```js
/*
speed：Default value is 400 milliseconds, 可以设置为毫秒值，"slow"， "fast"
easing ：Default value is "swing"
*/
$(selector).fadeIn(speed,easing,callback) // 改变opacity，显示元素
$(selector).fadeOut(speed,easing,callback) // 改变opacity，隐藏元素
$(selector).fadeToggle(speed,easing,callback)
$(selector).fadeTo(speed,opacity,easing,callback) // 可以指定opacity
```

