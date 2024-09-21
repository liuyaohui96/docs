
## Vue.use()
Vue.use() 用于安装 Vue.js 插件。该方法需要在调用 new Vue() 之前被调用。方法参数：
* plugin：是一个对象或者function。如果插件是一个对象，必须提供 install 方法；如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。当 install 方法被同一个插件多次调用，插件将只会被安装一次

```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)
```

## 插件
插件通常用来为 Vue 添加全局功能，一般有以下功能：
1. 添加全局方法或者属性
2. 添加全局资源：指令/过滤器/过渡等
3. 过全局混入来添加一些组件选项。
4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router

`Vue.use()`使用插件，Vue.use 会自动阻止多次注册相同插件，即使多次调用也只会注册一次该插件

```js
// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
let Vue = require('vue')
let VueRouter = require('vue-router')

// 不要忘了调用此方法
Vue.use(VueRouter)
```

## 开发插件
Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```