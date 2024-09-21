
## Vue.set()
Vue.set() 向响应式对象中添加一个属性并使得这个属性称为响应式，然后触发更新。


因为对于`this.myObject.newProperty = 'hi'`, Vue不能检测到更新，常用该方法为Vue实例中data对象中对象属性实现响应式

方法参数：
* target：响应式对象。注意，这个方法对象不能是Vue实例对象
* propertyName/index：属性或者index
* value：值
```js
// 返回设置的值
Vue.set( target, propertyName/index, value )

// === 例子
Vue.set(vm.someObj, 'b', 2) // 为data中的someObj设置一个b属性，并触发更新
```

## vm.$set()
vm.$set() 是全局 Vue.set 的别名
```js
vm.$set( target, propertyName/index, value )
```