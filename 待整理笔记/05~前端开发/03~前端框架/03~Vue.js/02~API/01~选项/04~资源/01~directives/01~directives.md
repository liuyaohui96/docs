
## directives
directives 是一个对象，是一个定义Vue实例使用的指令的哈希表

```js
let vm = new Vue({
  // Vue构造函数中的directives选项，注册实例的自定义指令
  directives: {
    id1:{
      // 定义钩子函数
    },
    id2:{
      // 定义钩子函数
    }
    // ...
  }
});
```