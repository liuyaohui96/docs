
## 为什么需要虚拟DOM
```js
// div元素的原型链
// 一个元素的原型链过长，有时候仅需要修改其中的一些属性
div -> HTMLDivElement -> HtmlDivElement 
 -> Element -> Node -> EventTarget -> Object
```