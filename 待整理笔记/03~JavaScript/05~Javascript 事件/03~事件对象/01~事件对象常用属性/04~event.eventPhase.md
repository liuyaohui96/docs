
## event.eventPhase
表示事件流当前处于哪一个阶段，返回一个代表当前执行阶段的 整数值：
1. 0： 没有事件正在被处理
2. 1： 捕获阶段，事件正在被目标元素的祖先对象处理
3. 2： 目标阶段，事件对象已经抵达the event's target。如果 Event.bubbles 的值为false, 对事件对象的处理在这个阶段后就会结束.
4. 3： 冒泡阶段，事件向祖先元素方向传递
```js
event.eventPhase
```
