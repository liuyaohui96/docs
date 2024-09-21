
## event.stopImmediatePropagation
event.stopImmediatePropagation() 阻止事件冒泡并且阻止相同事件的其他侦听器被调用, 即对这个特定的事件而言，没有其他监听器被调用。

如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 `event.stopImmediatePropagation()` 方法，则当前元素剩下的监听函数将不会被执行。

```js
event.stopImmediatePropagation
```