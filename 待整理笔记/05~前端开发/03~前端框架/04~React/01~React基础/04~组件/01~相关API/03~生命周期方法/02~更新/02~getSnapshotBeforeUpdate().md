
## getSnapshotBeforeUpdate()
getSnapshotBeforeUpdate()在最近一次渲染输出（提交到 DOM 节点）之前调用，得组件能在发生更改之前从 DOM 中捕获一些信息，返回值将作为参数传递给 componentDidUpdate()

方法参数：
* prevProps: 此前的props对象
* prevState： 此前的state对象
```jsx
getSnapshotBeforeUpdate(prevProps, prevState)
```