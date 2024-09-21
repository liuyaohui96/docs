
## data的响应式特性
初始化Vue实例时，Vue会遍历data的所有属性，使用 Object.defineProperty 把这些属性全部转为 getter/setter，getter/setter  能够追踪依赖，在属性被访问和修改时通知变更。

每个组件实例对应一个 watcher 实例，在组件渲染过程中会将使用的data的属性作为依赖，当这些依赖的setter触发时，会通知watcher，从而触发组件实例重新渲染（re-render)


## 响应式data的注意事项
* 在初始化vue实例时配置的data对象属性才能够成为响应式属性，因为Vue仅在初始化实例时将属性转换为getter/setter
    ```js   
    let vm = new Vue({
    data: {
        a: 1
    }
    });
    vm.a = 2; // 响应式
    vm.b = 2; // 非响应式的
    ```

* 对于已经创建的实例，不能添加跟级别的响应式属性如上`vm.b=2`是非响应式属性。

* 对于data中的嵌套对象属性有方法可以添加响应式属性：
    * `Vue.set(object, propertyName, value)`(如` Vue.set(vm.someObject, 'b', 2)`）向嵌套对象添加响应式属性
    * vm.$set 实例方法

* 如果为data中的嵌套对象添加多个属性，可以使用`data中的嵌套对象`，注意添加对象属性不会触发更新，需要用原对象与要混合进去的对象的属性一起创建一个新的对象
    ```js
    // 不会触发更新
    Object.assign(this.someObject, { a: 1, b: 2 })

    // 原对象与要混合进去的对象的属性一起创建一个新的对象能够触发更新
    this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
    ```

* 对data或者data中的属性使用`Object.freeze()`, 会阻止对象属性的变化，响应式系统也就无法跟踪变化