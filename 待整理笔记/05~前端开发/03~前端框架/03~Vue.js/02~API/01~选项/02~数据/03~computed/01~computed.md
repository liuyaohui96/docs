
## computed
在模板内可以使用表达式进行简单计算，对于复杂计算过程，维护起来很难。所以，一般将复杂的逻辑放到computed计算属性中。**计算属性的结果会被缓存**，除非依赖的响应式属性变化才会重新计算

computed 是一个对象，包含了实例的计算属性的哈希表。computed中的属性默认有getter，对于其中的属性
  * 如果只定义getter，可以使用两种语法:
    * 使用function语法
    * 对象语法，对象内定义getter
  * 如果需要定义setter，一定要使用对象语法，对象内定义setter。setter的新值作为函数的第一个参数被传递


所有的getters和setters的this上下文(context)自动绑定到Vue实例上。如果其中computed中的属性的getter和setter使用箭头函数，this将不会指向vue实例，但可以将vm作为函数参数传递，保证vue实例上下文不被丢失

```js
let vm = new Vue({
  data: { a: 1 },
  computed: {
    // 只有getter，直接使用function语法即可
    aDouble: function () {
      return this.a * 2
    },
    // 设置setter，需要使用对象语法
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // getter 利用a进行计算，返回2
vm.aPlus = 3 // setter内对a进行了修改
vm.a       // 返回2
vm.aDouble // getter 利用a进行计算，返回4


//=== 使用箭头函数，为了不丢失实例上下文，将vm 作为参数作为传递
computed: {
  aDouble: vm => vm.a * 2
}
```