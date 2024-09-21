## props
props 是一个数组或者对象（对象允许配置高级选项），用于接收来自父组件的数据

对象语法的高级选项有：
* type：`Number | String | Boolean | Symbol |  Function | Object | Array | Date | 自定义构造函数`
* default: 为该prop指定一个默认值。注意，**对象或数组的默认值必须从一个工厂函数返回**
* require：boolean值，指定该prop是否必须填
* validator: 自定义验证函数，该函数接受prop值作为唯一参数

```js
// 数组简单语法
Vue.component('props-demo-simple', {
  props: ['size', 'myMessage']
})

// 对象语法
Vue.component('props-demo-advanced', {
  props: {
    // 检测类型
    height: Number,
    // 检测类型 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }
})
```






## 非prop属性



## 组件根元素禁用继承
组件根元素禁用继承，可以在组件选项中使用`inheritAttrs: false`
```js
Vue.component('my-component', {
  inheritAttrs: false,
  // ...
})
```
> `$attrs`是实例属性，是一个对象，包含了传递给组件的属性名/属性值
配合`inheritAttrs: false`以及`$attrs`, 可以手动决定属性赋予哪一个元素，编写基础组建经常要使用到

```js
/*
!!!
inheritAttrs: false 选项不会影响class和style的绑定
*/
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})

//==== 使用
<base-input
  v-model="username"
  required
  placeholder="Enter your username"
></base-input>

```