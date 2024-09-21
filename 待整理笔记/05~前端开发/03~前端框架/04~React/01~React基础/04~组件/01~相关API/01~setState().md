
## setState()
setState() 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。

为了提高性能，setState() 并不总是立即更新组件，它会批量推迟更新。这使得在调用 setState() 后立即读取 this.state 成为了隐患，为了消除隐患，保证在应用更新后触发，有两种方式：
* componentDidUpdate
* setState 的回调函数（setState(updater, callback)）


方法参数
* updater：是一个函数，其回值会与 state 进行浅合并，参数有updater 函数中接收的 state 和 props 作为参数，且保证是最新的state 和 props
* callback：可选的回调函数，将在 setState 完成合并并重新渲染组件后执行，通常，使用 componentDidUpdate()来代替此方式。

setState() 的第一个参数除了接受函数外，还可以接受对象类型，对象会浅合并到新的state中

如果后续state取决于当前state，使用 updater 函数的形式代替
```jsx
setState(updater[, callback])
```