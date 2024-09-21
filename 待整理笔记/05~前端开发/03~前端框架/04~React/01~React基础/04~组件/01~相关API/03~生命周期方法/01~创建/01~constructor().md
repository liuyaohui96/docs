
## React.Component.constructor()
React.Component.constructor() 是组件的构造函数，在 React 组件挂载之前，会调用它。通常在构造函数内完成以下任务：
* 通过`this.state`初始化组件的state对象。初始化state，不需要使用`setState()`方法，只能使用`this.state`为state赋值，如果在其他方法内赋值state，那么就需要使用`setState()`方法
* 绑定事件函数到实例

所以，如果不需要初始化state对象，不需要进行方法绑定，可以不实现构造函数

注意事项：
* React.Component 子类实现构造函数，需要在其他语句前面添加`super(props)`，否则，this.props 在构造函数中可能会未定义

* 避免将 props 的值复制给 state。因为这样是没必要的，直接使用`this.props`就能引用相关的值，如果这样做了，prop如果被更新，并不会影响到state，所以只有在忽略更新的情况下使用

```js
constructor(props)
```