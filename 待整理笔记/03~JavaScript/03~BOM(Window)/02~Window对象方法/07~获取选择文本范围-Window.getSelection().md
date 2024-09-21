
## Window.getSelection()
Window.getSelection() 方法返回一个Selection对象，该对象表示用户选择的文本范围或插入符号的当前位置。等同于Document.getSelection()

```js
// selection 是一个 Selection 对象。 
//   如果想要将 selection 转换为字符串，可通过连接一个空字符串（""）或使用 String.toString() 方法
const selection = window.getSelection() ;
```

当你试图在 Selection 对象上使用一个 JavaScript 的String 对象上的属性或者方法时（如 String.prototype.length 或者 String.prototype.substr()），会导致错误。如果想要将 Selection 对象作为一个字符串使用，请直接调用 toString() 方法

## Selection 对象
https://developer.mozilla.org/en-US/docs/Web/API/Selection