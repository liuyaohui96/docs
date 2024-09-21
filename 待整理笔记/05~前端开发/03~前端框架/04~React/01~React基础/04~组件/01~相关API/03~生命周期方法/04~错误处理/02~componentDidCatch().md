
## componentDidCatch()
componentDidCatch() 在后代组件抛出错误后被调用。

componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用

方法参数：
* error：抛出的错误
* info：带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息

```jsx
componentDidCatch(error, info)
```