# Event

## commmon dom event
```JavaScript
// mouse events
click dbclick
mousedown // 单击鼠标，释放之前
mouseup // 单机鼠标，释放之后
mouseover mouseout
mousemove

// keyboard events
keypress
keydown // 键盘释放前
keyup // 键盘释放后


// document/ window events
load // 文档加载
resize // 调整浏览器窗口
scroll // 滚动
unload // 连接到其他页面，关闭标签或浏览器窗口

// form event
submit // 点击subimit按钮
reset // reset按钮点击
change // 表单字段触发
focus // 聚焦表单字段
blur // 退出当前聚焦
```

## Event method syntax
```JavaScript
$('selector').event(function(){
    // do something
})

// mouseover 执行functon1
// mouseout 执行function2
$('selector').hover(function1, function2);
```

## event off
```JavaScript
$('selector').off([sting]);
```


## 事件对象
```JavaScript
// ----------- attribute
event.pageX event.pageY // 浏览器窗口
evetn.screenX event.screenY // 屏幕
shiftkey // 是否按下shift

// 待补充

// --------------- methord

event.preventDefault(); // 阻止事件常规行为
event.stopPropagation(); // 停止事件冒泡，即阻止事件向父元素传播
```

## on 
```JavaScript
$('selector1').on('eventType'[, selector2[, object]], functionName);

// 用于监听动态生成的selector2参数，selector1 是selector2的父元素，由于事件的冒泡
// 所以可以委托事件给父元素

// object 参数可以利用事件对象的data属性获取
// 如 event.data.properties-in-object
```