
## Vue.observable()
Vue.observable() 使得一个对象响应，Vue 内部会用它来处理 data 函数返回的对象。方法参数：
* object：需要响应的对象

返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新

```js
const state = Vue.observable({ count: 0 })

const Demo = {
  render(h) {
    return h('button', {
      on: { click: () => { state.count++ }}
    }, `count is: ${state.count}`)
  }
}
```
