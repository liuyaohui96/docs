
## DOMContentLoaded 事件触发脚本调用
监听浏览器的`DOMContentLoaded"`事件，在HTML 文档体加载、解释完毕后加载脚本，避免出错
```js
document.addEventListener("DOMContentLoaded", function() {
  // ...
});
```