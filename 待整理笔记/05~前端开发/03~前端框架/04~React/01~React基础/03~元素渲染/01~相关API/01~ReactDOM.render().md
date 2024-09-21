
## ReactDOM.render()
ReactDOM.render() 用于在指定的container里渲染一个指定的React元素，需要的参数：
* element：定义的React元素
* container: 将元素渲染到的指定的容器
* callback： 可选的回调函数，该回调将在组件被渲染或更新之后被执行

ReactDOM.render() 返回一个对根组件 ReactComponent 实例的引用，应该避免使用这个返回的引用，因为它是历史遗留下来的内容，而且在未来版本的 React 中，组件渲染在某些情况下可能会是异步的。如果实在需要获得根组件
ReactComponent 实例的引用，推荐为根元素添加 `callback ref`

```jsx
ReactDOM.render(element, container[, callback])
```

* 首次调用ReactDOM.render() 容器节点里的所有 DOM 元素都会被替换
* 后续对统一React元素在同一Container上调用ReactDOM.render() 会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新
* ReactDOM.render() 不会修改容器节点，即只会修改容器的子节点