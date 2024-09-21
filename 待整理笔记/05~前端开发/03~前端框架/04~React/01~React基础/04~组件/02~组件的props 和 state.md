
## 组件的props
当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个称为props的对象传递给组件。

Props 对象是只读的：组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props，因为规定所有 React 组件都必须像纯函数一样保护它们的 props 不被更改

## 组件的state
组件的state 表示随时可能发生变化的数据

关于state的注意事项：
* 未用于渲染或数据流的值不必设置为state，可以直接在组件实例上定义   
* 不要直接改变`this.state`，因为后续调用的 setState() 可能会替换掉这种改变
* State 的更新可能是异步的：出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用，因为 this.props 和 this.state 可能会异步更新，所以不要依赖他们的值来更新下一个状态
* State 的更新会被合并。调用 setState() 的时候，React 会把你提供的对象合并到当前的 state