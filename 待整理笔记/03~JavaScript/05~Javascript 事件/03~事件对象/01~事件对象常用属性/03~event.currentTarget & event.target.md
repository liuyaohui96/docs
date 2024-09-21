
## event.currentTarget & event.target
* event.currentTarget：指向事件处理程序绑定的DOM对象；事件处理程序内部，this 等于 event.currentTarget
* event.target：指向实际引发事件的元素， event.target 属性可以用来实现事件委托 (event delegation)
```js
event.currentTarget
event.target
```