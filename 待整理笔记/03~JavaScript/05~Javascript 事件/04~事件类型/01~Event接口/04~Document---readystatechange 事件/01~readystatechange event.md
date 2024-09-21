
## readystatechange
当文档的 readyState 属性发生改变时，会触发 readystatechange 事件

## document.readyState
Document.readyState 属性描述了文档的加载状态, 当该属性值发生变化时，会在document 对象上触发readystatechange事件

一个文档的 readyState 可以是以下之一:
1. loading: 正在加载
2. interactive： 可交互，"正在加载"状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载
3. complete： 文档和所有子资源已完成加载。表示 load 状态的事件即将被触发

对于 document 而言，值为"interactive"的 readyState 会在与 DOMContentLoaded 大致相同的时刻触发 readystatechange 事件。但与此同时，图像及其他外部文件不一定可用。

注意：虽然使用 readystatechange 可以十分近似地模拟 DOMContentLoaded 事件，但它们本质上还是不同的。在不同页面中，load 事件与 readystatechange 事件并不能保证以相同的顺序触发。

## 例子
```js
// === 例子
switch (document.readyState) {
  case "loading":
    // 表示文档还在加载中，即处于“正在加载”状态。
    break;
  case "interactive":
    // 文档已经结束了“正在加载”状态，DOM元素可以被访问。
    // 但是像图像，样式表和框架等资源依然还在加载。
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // 页面所有内容都已被完全加载.
    let CSS_rule = document.styleSheets[0].cssRules[0].cssText;
    console.log(`The first CSS rule is: ${CSS_rule }`);
    break;
}
···