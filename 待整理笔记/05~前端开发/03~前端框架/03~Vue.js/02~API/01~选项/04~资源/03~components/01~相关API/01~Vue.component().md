
## Vue.component()
Vue.component() 用于注册全局组件

方法需要的参数
* id：字符串，会自动设置为组件名称
* definition: 可选
    * 可以是一个使用`Vue.extend()`扩展过的构造器
    * 可以是一个选项对象(自动调用`Vue.extend()`)

```js
Vue.component( id, [definition] )

// === 例子
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))
// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })
```