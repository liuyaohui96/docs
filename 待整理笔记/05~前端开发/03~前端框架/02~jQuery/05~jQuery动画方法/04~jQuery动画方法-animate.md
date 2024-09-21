
## jQuery动画方法-animate
```js
/*
speed：Default value is 400 milliseconds, 可以设置为毫秒值，"slow"， "fast"
easing ：Default value is "swing"
*/
(selector).animate({styles},speed,easing,callback)
(selector).animate({styles},{options})

// === 例子
$("button").click(function(){
  $("#box").animate({height: "300px"});
});
```

## animate参数参考
https://www.w3schools.com/jquery/eff_animate.asp