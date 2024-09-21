
## Vue.compile()
Vue.compile() 用于在 render 函数中编译模板字符串，方法参数：
* template: 字符串模板

```js
let res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
```