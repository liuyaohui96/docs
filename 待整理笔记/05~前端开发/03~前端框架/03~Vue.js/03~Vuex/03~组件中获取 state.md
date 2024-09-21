
## 组件中获取state
在组件的计算属性中引用Vuex状态。每当状态属性变化, 都会重新求取计算属性，并且触发更新相关联的 DOM

1. 组件实例引入store（不推荐）
2. 根实例注入store
3. mapState 辅助函数

## 组件实例引入store
这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟(mocking)状态。
```js
computed: {
    count () {
      return store.state.count
    }
}
```

## 根实例注入store
Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）

```js
const app = new Vue({
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  // ...
})

// 组件中的计算属性可以通过vm.$store访问
computed: {
  count () {
    return this.$store.state.count
  }
}
```

## mapState 辅助函数
Vuex 提供了mapState 辅助函数用于生成计算属性，方便Vuex state计算属性生成
```js
import { mapState } from 'vuex'

computed:{
  localComputed() {
    /* ... */
  },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' ，等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  })
};
```