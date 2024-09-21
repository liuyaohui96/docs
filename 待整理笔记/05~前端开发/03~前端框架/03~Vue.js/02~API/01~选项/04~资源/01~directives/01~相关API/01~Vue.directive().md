
## Vue.directive()
Vue.directive() 用于注册全局指令

方法参数：
* id：字符串
* definition: 可选的定义对象
```js
Vue.directive( id, [definition] )

// === 例子
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// 函数缩写形式，相当于定义了bind和update钩子函数
Vue.directive('my-directive', function () {
  // 这里将会被 `bind` 和 `update` 调用
})

```