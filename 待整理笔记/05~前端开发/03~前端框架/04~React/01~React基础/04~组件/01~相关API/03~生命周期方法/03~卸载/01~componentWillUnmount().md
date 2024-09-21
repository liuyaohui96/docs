
## componentWillUnmount()
componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作

componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染

```jsx
componentWillUnmount()
```