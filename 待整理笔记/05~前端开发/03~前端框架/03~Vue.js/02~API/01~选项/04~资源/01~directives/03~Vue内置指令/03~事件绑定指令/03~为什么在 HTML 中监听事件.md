
## 为什么在 HTML 中监听事件
事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。其实所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。
使用 v-on 还有几个好处：
* 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法
* 无须在 JavaScript 里手动绑定事件
* ViewModel 被销毁时，所有的事件处理器都会自动被删除。无须担心如何清理它们