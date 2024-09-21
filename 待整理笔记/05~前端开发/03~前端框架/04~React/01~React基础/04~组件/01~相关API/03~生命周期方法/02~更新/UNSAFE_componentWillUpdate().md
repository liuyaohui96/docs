
## UNSAFE_componentWillUpdate()
当组件收到新的 props 或 state 时，会在渲染之前调用 UNSAFE_componentWillUpdate()

通常，此方法可以替换为 componentDidUpdate()。如果需要在此方法中读取 DOM 信息，则可以使用getSnapshotBeforeUpdate()

如果 shouldComponentUpdate() 返回 false，则不会调用 UNSAFE_componentWillUpdate()
```jsx
UNSAFE_componentWillUpdate(nextProps, nextState)
```