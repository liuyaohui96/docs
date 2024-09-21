## watch
watch 是一个对象，定义一个侦听器，用于响应数据的变化，当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

对象其中属性的键（key）为需要观察（watch）的表达式，**属性的value是对应的回调函数，回调函数得到新值和旧值的参数**。属性的value可以是以下形式：
* 函数（不应该使用箭头函数来定义 watch 函数，箭头函数的this绑定了父级作用域的上下文而不是 Vue 实例）。
* 包含选项的对象，包含的选项是：
  * handler: 指定回调函数
  * immediate：boolean值，如果为true，则立即以表达式的当前值触发回调。带有 immediate 选项时，不能在第一次回调时取消侦听给定的 property
  * deep：boolean值，指定是否在对象内部值发生变化时触发回调
* 包含多个value的Array语法，每个value可以是函数或者包含选项的对象
   

Vue 实例在Vue实例化时调用 $watch()，遍历 watch 对象的每一个属性

```js
// === 例子
let vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function(val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal); // 值发生变化时，输出旧值和旧值
    },
    b: 'someMethod', // 函数名
    // 对象内部值发生变化时触发回调，不论其被嵌套多深
    c: {
      handler: function(val, oldVal) {},
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 包含多个value的Array语法，每个value可以是函数或者包含选项的对象
    e: [
      'handle1', // 函数名
      function handle2(val, oldVal) {},
      {
        handler: function handle3(val, oldVal) {}
      }
    ],
    // 观察 vm.e.f's 的值: {g: 5}
    'e.f': function(val, oldVal) {}
  }
});
vm.a = 2; // => new: 2, old: 1
```