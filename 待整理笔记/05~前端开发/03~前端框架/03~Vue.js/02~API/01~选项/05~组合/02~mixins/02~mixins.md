
## mixins
mixins 是一个数组，数组内每一项都是实现混入的数组。混入的实例对象可以像正常的实例对象一样包含选项， 它们将使用Vue.extend（）实现最终的选项合并。

```js
// === 例子
// Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用
let mixin = {
  created: function () { console.log(1) }
}
let vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})
// => 1
// => 2
```