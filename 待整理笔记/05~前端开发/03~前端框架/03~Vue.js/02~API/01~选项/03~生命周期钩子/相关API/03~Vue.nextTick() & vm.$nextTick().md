
## 异步更新队列
Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更，并不能保证DOM已经更新，理论上，不应该去主动操作DOM，主动操作DOM就要注意vue的异步更新队列原理。

为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用`Vue.nextTick(callback)`。

## 全局方法 Vue.nextTick() 
Vue.nextTick() 在下次 DOM 更新循环结束之后执行callback，即将回调函数的调用延迟到下一次DOM更新周期(next dom update cycle)

参数：
* callback：可选，指下次 DOM 更新循环结束之后执行的回调函数
* context：可选对象，绑定上下文

注意：2.1.0 起新增：如果没有提供回调且在支持 Promise 的环境中，返回一个 Promise
```js
Vue.nextTick(callback[, context])
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })
```

## 实例方法 vm.$nextTick()
vm.$nextTick() 跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上
```js
vm.$nextTick([callback])

// ==== 例子
new Vue({
  // ...
  methods: {
    // ...
    example: function() {
      // 修改数据
      this.message = 'changed';
      // DOM 还没有更新
      this.$nextTick(function() {
        // DOM 现在更新了
        // `this` 绑定到当前实例
        this.doSomethingElse();
      });
    }
  }
});
```
