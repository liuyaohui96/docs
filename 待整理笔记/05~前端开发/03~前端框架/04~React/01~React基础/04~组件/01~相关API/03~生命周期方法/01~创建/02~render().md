
## React.Component.render()
render() 方法是 class 组件中唯一必须实现的方法。

render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一:
* React 元素
* 数组或 fragments
* Portals
* 符串或数值类型
* 布尔类型或 null。什么都不渲染

render() 函数是纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且不会直接与浏览器交互，浏览器进行交互需要在 componentDidMount() 或其他生命周期方法中进行。

注意，如果 shouldComponentUpdate() 返回 false，则不会调用 render()
```js
render()
```