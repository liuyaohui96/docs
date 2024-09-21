
## data的代理访问
实例创建之后，可以使用`vm.$data`访问data对象。

vm 实例还代理（proxy) 了所有data独像上的属性，`vm.a`相当于`vm.$data.a`

注意：data对象中以`_或者$`开头的属性不会被Vue实例代理，因为它们可能与Vue内部属性和方法冲突，这类属性必须要`vm.$data._a`的形式访问。

```js
//=== vue 实例
let vm = new Vue({
  data: {
    a: 1
  }
})
vm.$data === data // => true

vm.a // 相当于 vm.$data.a
```