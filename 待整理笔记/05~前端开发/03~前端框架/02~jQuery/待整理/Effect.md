# Effect
```JavaScript
// 显示与隐藏
// speed: {slow, fast, milliseconds}
$('selector').show(speed, callback);
$('selector').hide(speed, callback);
$('selector').toggle(speed, callback); // show to hide, hide to show

// 淡入与淡出
// speed: {slow, fast, milliseconds}
$('selector').fadeIn(speed, callback);
$('selector').fadeOut(speed, callback);
$('selector').fadeToggle(speed, callback); // fadeIn to fadeOut, fadeOut to fadeIn
$('selector').fadeTo(speed, opacity, callback); // callback excuted after the opacity set 

// 滑上与滑下
// speed: {slow, fast, milliseconds}
$('selector').slideDown(speed, callback); // 隐藏元素向下滑入视线
$('selector').slideUp(speed, callback); // 将显示的元素向上

// 元素是隐藏的，应用slideDown元素
// 元素是可见的，应用slideUp元素
$('selector').slideToggle(speed, callback); 
```

## animate
```JavaScript
// speed: {slow, fast,  milliseconds}
$('selector').animate({params}, speed, callback);
// params 中如果值包含单位，必须将值放在引号中
/* css属性中不能接收连字符，所以font-size 应该改为fontSize
 * 如果想使用连字符，需要使用''包围，即 'font-size'
 */
```


## example
```JavaScript
// 不同selector的串联动画
$('selector1').fadeIn(1000, function(){
    $('selector2').fadeIn(1000, function(){
        $('selector3').show(1000, function(){
            // do something
        })
    })
})

// 同一个selector的串联动画
$('selector').fadeIn(1000).fadeOut(1000);
```