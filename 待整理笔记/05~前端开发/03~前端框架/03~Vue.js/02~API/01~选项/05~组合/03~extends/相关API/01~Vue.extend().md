
## Vue.extend()
Vue.extend() 根据Vue构造函数，创建子类，参数是一个包含组件选项的对象

需要参数：
* options： 是一个对象
```js
<div id="mount-point"></div>

// data 选项 在 Vue.extend() 中必须是函数
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上
new Profile().$mount('#mount-point')
```