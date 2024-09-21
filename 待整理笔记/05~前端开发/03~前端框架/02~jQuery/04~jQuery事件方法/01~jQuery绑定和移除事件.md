## jQuery 绑定和移除事件
1. 事件类型语法绑定事件
2. on() & off
3. one()

## 事件类型语法绑定事件
```js
// 基本语法
$(selector).eventType(function(){
    // ...
})

```

## on() & off
```js
/*
如果有childSelector，相当于事件代理，事件不会绑定在selector上，而是其指定的childSelctor上
data： 传递给函数的数据
function：回调函数
*/
$(selector).on(event[,childSelector,data],function[,map])

$(selector).off(event[,selector,function(eventObj),map])

// === on 和 off 可以使用对象语法绑定多个事件类型，如
$(document).ready(function(){
  $("p").on({
    mouseover: function(){
      $("body").css("background-color", "lightgray");
    },  
    mouseout: function(){
      $("body").css("background-color", "lightblue");
    }, 
    click: function(){
      $("body").css("background-color", "yellow");
    }  
  });
});
```

## one
为所选元素附加一个或多个事件处理程序，并指定事件发生时要运行的函数，每个事件处理程序仅会运行一次
```js
$(selector).one(event,[data,function])

// === 例子
$('p').one('click', function() {
  $(this).animate({ fontSize: '+=6px' });
});
```