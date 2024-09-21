## jQuery动画方法-队列方法
1. queue() & dequeue()
2. clearQueue() 


## queue() & dequeue()
1. queue()返回队列中的事件处理程序
2. dequeue() 经常与queue配合用于插入一个事件处理函数

```js
$(document).ready(function(){
  $("#start").click(function(){
    var div = $("div");  
    div.animate({height: 300}, "slow");
    div.animate({width: 300}, "slow");
    div.queue(function(){
      div.css("background-color", "red");  
      
    });
    div.animate({height: 100}, "slow");
    div.animate({width: 100}, "slow");
  });
});
```

## clearQueue() 
清除事件队列尚未运行的事件处理程序，正在运行的不会被清除