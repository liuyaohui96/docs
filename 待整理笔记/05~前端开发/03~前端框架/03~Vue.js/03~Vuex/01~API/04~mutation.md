
## mutation
Vuex 规定，更改store中的state的唯一方法就是提交mutation。

mutation必须是同步函数。mutation的组成：
* 字符串事件类型（type）。通常使用ES6计算属性来使用一个常量作为事件类型名称，事件类型通常在一个单独的文件中定义（如`mutation-type.js`)
* 回调函数（回调函数就是进行state更改的地方），参数为：
    * state
    * 额外的参数。经常地将所有额外的参数封装进一个对象中传入

```js
mutations: {
  increment (state) {
    // mutate state
    state.count++
  }
}

// === 可以向 store.commit 传入额外的参数
mutations: {
  increment (state, n) {
    state.count += n
  }
}

// === 大多数情况下，额外参数应该是一个对象
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```


## 提交mutation
提交mutation会唤醒相应的mutation 的回调函数，提交mutation方式：
* store.commit(type[, args...]) ，
* 对象风格的提交方式，直接使用包含 type 属性的对象: store.commit({type:'...', ....})

在mutation的回调函数中更改state时，需遵守 Vue 的响应规则，当需要在对象上添加新属性时，可以使用`Vue.set()` 或者 `state.obj = { ...state.obj, newProp: 123 }`这种形式

```js
store.commit('increment')
// 可以向 store.commit 传入额外的参数
store.commit('increment', 10)
// 大多数情况下，额外参数应该是一个对象
store.commit('increment', {
  amount: 10
})

// === 对象风格的提交方式，直接使用包含 type 属性的对象
store.commit({
  type: 'increment',
  amount: 10
})
```
