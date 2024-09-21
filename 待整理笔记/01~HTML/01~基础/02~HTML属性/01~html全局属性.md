
## html全局属性
* lang: 元素内容的的语言
* id： 元素id，文档内唯一
* class：类
* style：行内css样式
* data-*：为元素增加自定义属性。在 JavaScript 框架变得流行之前，开发者经常使用data-属性，把额外数据存储在 DOM 自身，现在，不鼓励使用data-属性，原因
    * 用户可以通过在浏览器中利用检查元素，轻松地修改属性值，借此修改数据。
    * 数据模型最好存储在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新
* title：与其所属元素相关信息的文本
* width & height
* href(链接)
* tabindex: 设置元素可以获得焦点，通过tab可以导航
* hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果

## 其他非常用全局属性
* accesskey:设置快捷键，提供快速访问元素
* contenteditable: 指定元素内容是否可编辑
* contextmenu: 自定义鼠标右键弹出菜单内容
* dir: 设置元素文本方向
* draggable: 设置元素是否可拖拽
* dropzone: 设置元素拖放类型： copy, move, link
* spellcheck: 是否启动拼写和语法检查
* translate: 元素和子孙节点内容是否需要本地化
