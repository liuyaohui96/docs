
## methods
methods 是一个对象，在对象内定义方法（函数语法），可以直接通过 VM 实例访问这些方法或者在指令表达式中使用。

函数中的this动绑定为 Vue 实例，不应该使用箭头函数定义method函数，因为箭头函数中的this会绑定到父级上下文，而不是vue实例

```js
let vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function() {
      this.a++;
    }
  }
});
vm.plus();
vm.a; // 2
```