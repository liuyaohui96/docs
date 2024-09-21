
## Vue.filter()
Vue.filter() 注册全局过滤器

参数：
* id：字符串类型
* definition：可选，是一个函数，函数返回处理的值
```js
Vue.filter( id, [definition] )
// === 例子
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})
// getter，返回已注册的过滤器
let myFilter = Vue.filter('my-filter')
```
