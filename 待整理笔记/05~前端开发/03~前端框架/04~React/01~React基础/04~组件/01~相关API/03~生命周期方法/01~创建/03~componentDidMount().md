
## React.Component.componentDidMount()
componentDidMount() 在组件挂载后（插入 DOM 树中）调用。

由于组件已经被加载了，所以是实例化请求数据，添加订阅的地方，但不要忘记在 componentWillUnmount() 里取消订阅。

可以在 componentDidMount() 里调用 setState()触发额外渲染，但此渲染会发生在浏览器更新屏幕之前证了即使在 render() 两次调用的情况下，用户也不会看到中间状态，谨慎使用该模式，会导致性能问题，通常，应该在 constructor() 中初始化 state，仅在渲染需要依赖DOM 节点的大小或位置可以使用这中方式