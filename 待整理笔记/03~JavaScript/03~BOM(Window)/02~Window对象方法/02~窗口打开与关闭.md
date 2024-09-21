
## Window对象方法-窗口打开与关闭
1. Window.open()
2. Window.close()
## Window.open()
用指定的名称将指定的资源加载到浏览器上下文，如果没有指定名称，则一个新的窗口会被打开并且指定的资源会被加载进这个窗口的浏览器上下文中
```js
// url 新窗口需要载入的url地址
// windowName 新窗口的名称
  //该字符串可以用来作为超链接 <a> 或表单 <form> 元素的目标属性值。字符串中不能含有空白字符
// windowFeatures 可选，列出新窗口的特征(大小，位置，滚动条等)作为一个DOMString
// wwindow，一个打开的新窗口对象的引用，可以通过这个引用访问新窗口的属性或方法
let window = window.open(url, windowName, [windowFeatures]);

// example
window.open('test.html', '_blank', 'width=400, height=400')
```
windows feature 参考 ： https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open#Position%20and%20size%20features

## Window.close()
关闭当前窗口或某个指定的窗口。

```js
window.close();
```


