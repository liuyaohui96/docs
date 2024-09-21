## data
data 定义vue实例或者组件实例的数据对象。

类型：
* 在Vue实例上定义data是一个Object：对象是纯粹的对象（浏览器的原生对象，原型链上的属性都会被忽略）。
* 在组件实例上定义data是一个函数：函数内返回一个对象，因为组件会被重复使用，如果data是一个对象，那么这个对象会被所有组件实例共享，所以组件上定义data使用函数，每次组件实例常见都返回一个全新的data对象副本

```js
//=== vue 实例
let vm = new Vue({
  data: {
    a: 1
  }
})
vm.a // => 1
vm.$data === data // => true


// === compnent instance 组件实例
//  Vue.extend() 中的data是函数
var Component = Vue.extend({
  data: function () {
    return { a: 1 }
  }
})

// === 组件data使用箭头函数
/*
箭头函数this 不会指向组件的实例，不过仍然可以将其实例作为函数参数
*/
data: vm => ({ a: vm.myProp })
```



## 响应式的预先初始化
在创建vue实例之前，应该声明好所有根级别(root-level)的响应属性。

实例创建后的使用`vm.$data.a = 2`或者`vm.a`设置的data属性不是响应式的，所以应该为所有响应式data进行预先设定，如果暂时没有值，可以设置一些初始值，如下：

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```



