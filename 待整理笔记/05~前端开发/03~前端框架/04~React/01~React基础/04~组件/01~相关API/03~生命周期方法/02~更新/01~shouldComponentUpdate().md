
## shouldComponentUpdate()
shouldComponentUpdate() 方法返回一个boolean值，确定 React 组件的输出是否受当前 state 或 props 更改的影响，默认行为是 state 每次发生变化组件都会重新渲染，大部分情况下，遵循默认行为

调用时期：当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。首次渲染或使用 forceUpdate() 时不会调用该方法

使用场景: 作为性能优化的方式而存在，不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug

注意事项：
* 不建议手动编写shouldComponentUpdate()，可以考虑使用内置的 PureComponent 组件（PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性）
* 如果一定要手动编写shouldComponentUpdate()，可以将 this.props 与 nextProps 以及 this.state 与nextState 进行比较，并返回 false 以告知 React 可以跳过更新。
* 返回 false 并不会阻止子组件在 state 更改时重新渲染
* 不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能

方法参数：
* nextProps: 变化后props对象
* nextState：变化后的state对象

默认返回true。如果返回false，则不会调用 `UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()`
```jsx
shouldComponentUpdate(nextProps, nextState)
```