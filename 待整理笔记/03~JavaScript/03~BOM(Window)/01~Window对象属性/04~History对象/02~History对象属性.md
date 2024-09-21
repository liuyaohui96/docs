
## History对象属性
1. History.length
2. HIstory.scrollRestoration

## History.length
History.length只读属性返回一个Integer，表示会话历史记录中的元素数，包括当前加载的页面。
例如，对于在新标签页中加载的页面，此属性返回1

## History.scrollRestoration
History.scrollRestoration 设置文档历史记录的回复行为

```js
// 可能返回的值是 auto | manual
// auto 用户滚动的位置将会被恢复
// manual 用户需要自动进行滚动
History.scrollRestoration
```