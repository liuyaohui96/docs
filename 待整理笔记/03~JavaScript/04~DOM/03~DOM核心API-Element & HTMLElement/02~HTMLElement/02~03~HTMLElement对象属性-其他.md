
## HTMLElement对象属性-其他
1. HTMLElement.contentEditable
2. HTMLElement.hidden
3. HTMLElement.innerText



## HTMLElement.contentEditable
表明元素是否是可编辑的，可能的值是：
1. "true" : 元素可编辑
2. "false":  表明该元素不可编辑
3. "inherit": 表明该元素继承了其父元素的可编辑状态。
```js
editable = element.contentEditable
element.contentEditable = "true"
```



## HTMLElement.hidden
隐藏文档，值设置为 true，否则值设置为false

适用于使用 hidden 的情况：
1. 目前不相关的内容，但是将来会用到的
2. 以前需要，但是现在不需要的内容
3. 以一种模版的方式存在，在一个页面的其他地方重复使用到

## HTMLElement.innerText
表示节点及其后代的“渲染”文本内容（即，会自动过滤标签）

