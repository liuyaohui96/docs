
## renderError
当 render 函数遭遇错误时，提供替代的render的输出，配合热加载(hot-reload)特别有用，其错误将会作为第二个参数传递到 renderError

只能在开发者环境下工作。

```js
new Vue({
  render (createElement) {
    throw new Error('oops')
  },
  renderError (createElement, err) {
    return createElement('pre', { style: { color: 'red' }}, err.stack)
  }
}).$mount('#app')
```