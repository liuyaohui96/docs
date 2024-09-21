
## 在组件中获取getter
1. 通过属性访问
  * vm.$store.getters.getterName
  * mapGetters 辅助函数
2. 通过方法访问

## 通过属性访问
getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中
```js
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```
Vuex 提供了mapGetters 辅助函数，将 store 中的 getter 映射到局部计算属性
```js
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}

// === 如果想将一个 getter 属性另取一个名字，使用对象形式
mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```

## 通过方法访问
可以通过让 getter 返回一个函数，来实现给 getter 传参。getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
```js
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
// 通过方法是用getter
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```