## jQuery事件触发方法
1. trigger() & triggerHandler() 

## trigger() & triggerHandler() 
1. trigger() 为指定元素触发指定的事件类型，会触发默事件的默认事件行为
2. triggerHandler() 为指定元素触发指定的事件类型，不会触发默事件的默认事件行为
```js
// 可选的param1, param2... 用于为事件处理程序附加参数
$(selector).triggerHandler(event[,param1,param2,...])
```