
## Vue.config.optionMergeStrategies
Vue.config.optionMergeStrategies 是一个对象，默认为空对象，用于自定义选项合并策略。

如果想让自定义选项以自定义逻辑合并，可以向 Vue.config.optionMergeStrategies 添加一个函数，该函数接收三个参数：
* 父实例定义的该选项的值
* 子实例上定义的该选项的值
* Vue 实例上下文被作为第三个参数

```js
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1
}

const Profile = Vue.extend({
  _my_option: 1
})

// Profile.options._my_option = 2
```

对于多数值为对象的选项，可以使用与 methods 相同的合并策略：
```js
let strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods
```