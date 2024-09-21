
## static getDerivedStateFromError()
生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state

getDerivedStateFromError() 会在渲染阶段调用，因此不允许出现副作用
```jsx
static getDerivedStateFromError(error)
```