
## Vue.delete()
Vue.delete() 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。该方法很少被使用。

方法参数：
* target：响应式对象。注意，这个方法对象不能是Vue实例对象
* propertyName/index：属性或者index
```js
Vue.delete( target, propertyName/index )
```

## vm.$delete()
vm.$delete() 是全局 Vue.delete 的别名
```js
vm.$delete( target, propertyName/index )
```