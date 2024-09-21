

## 改变窗口位置
1. Window.moveTo(x, y) 将当前窗口移动到指定的坐标位置
2. Window.moveBy( deltaX, deltaY) 与当前位置相对的距离移动当前窗口

```js
// ==== 根据 x y 移动相应的像素
window.moveBy(0 , 100)// 向下移动100像素
window.moveBy(-50, 0) // 向左移动50像素
```

## 改变窗口大小
1. Window.resizeTo(aWidth, aHeight) 调整窗口的大小
2. Window.resizeBy() 相对于窗口当前大小来调整该窗口的大小

```js
//  一般默认情况下，不允许对浏览器主窗口进行位置移动，位置移动，窗口关闭等操作
  //  允许对window.open新打开的窗口进行上述操作
// aWidth 是一个整数，表示新的 outerWidth（包括滚动条、窗口边框等）。
// aHeight 是一个整数，表示新的 outerHeight（包括滚动条、标题栏、窗口边框等）。
window.resizeTo(aWidth, aHeight) 

window.resizeBy( deltaX, deltaY)
```



