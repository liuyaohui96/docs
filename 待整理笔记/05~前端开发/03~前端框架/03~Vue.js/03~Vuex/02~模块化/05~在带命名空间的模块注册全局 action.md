
## 在带命名空间的模块注册全局 action
需要在带命名空间的模块注册全局 action，你添加 root: true，并将这个 action 的定义放在函数 handler 中

```js
{
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  },
  modules: {
    foo: {
      namespaced: true,

      actions: {
        someAction: {
          root: true,
          handler (namespacedContext, payload) { ... } // -> 'someAction'
        }
      }
    }
  }
}
```