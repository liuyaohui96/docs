
## getter
有些场景下，需要频繁对state中的数据进行某种操作，为了不至于到处复制函数或者抽取出来作为共享函数，所以提供了getter。

getter 相当于store中的计算属性，getter是一个函数，都是可选的接受两个参数:
* state
* getter

getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。


```js
// 也可以接受其他 getter 作为第二个参数
getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```