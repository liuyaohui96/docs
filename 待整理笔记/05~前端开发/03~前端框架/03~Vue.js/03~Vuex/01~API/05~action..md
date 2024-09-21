
## action
action提交的是mutation，不是直接变更状态。action是一个函数，可以包含异步操作，action函数参数：
* context 对象：与 store 实例具有相同方法和属性的，可以通过context.state 和 context.getters 来获取 state 和 getters，实践中通常需要调用 commit 很多次的时候，经常用到 ES6参数解构 来简化代码（`actionName({commit})`）
* 额外参数，通常封装为一个对象

```js
// === 实践中，通常使用ES6参数解构context对象
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

## 分发action
action 通过 store.dispatch() 方法触发:
* `store.dispatch(actionName[, args...])` 
* `store.dispatch({type: actionName, args: ...})`

```js
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

## 组合action
1. 可以使用promise
2. 利用 async / await

```js
// === promise
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  },
   actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
// 分发action
store.dispatch('actionA').then(() => {
  // ...
})

// === 利用 async / await
// 假设 getData() 和 getOtherData() 返回的是 Promise
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```