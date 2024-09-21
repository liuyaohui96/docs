## javascript兼容性的两个常见问题

```js
// 1. 事件绑定兼容性问题
IE8以下不支持addEventListener绑定事件，使用attachEvent

// 2. 事件传播
IE8以下不支持e.stopPropagation()阻止事件传播，
使用e.returnValue=fasle 解决

```
1. 
2. 