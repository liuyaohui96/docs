
## static React.Component.getDerivedStateFromProps()
React.Component.getDerivedStateFromProps() 是一个静态方法。该方法是适用于state 的值在任何时候都取决于 props，让组件在 props 变化时更新 state。大多数情况下，不建议state 复制props，派生状态会导致代码冗余，并使组件难以维护

调用时期：
* render() 方法之前
* 初始挂载及后续更新时都会被调用

需要的参数：
* props: props 对象
* state：state 对象

该方法返回一个对象来更新 state，如果返回 null 则不更新任何内容
```js
static getDerivedStateFromProps(props, state)
```