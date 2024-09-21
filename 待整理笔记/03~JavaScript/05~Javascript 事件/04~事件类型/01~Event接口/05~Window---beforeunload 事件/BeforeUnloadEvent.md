
## BeforeUnloadEvent

在 window、document 和它们的资源将要被卸载时触发

## 
当 Event 的 returnValue 属性被赋值为非空字符串时，会弹出一个对话框，让用户确认是否离开页面（示例如下）。否则，事件被静默处理。

```js
window.addEventListener("beforeunload", function( event ) {
  event.returnValue = "\o/";
});
```