

## 自定义组件使用v-model
自定义组件支持 v-model。组件上的 v-model，相当于发生以下操作：
* 将其 value 特性绑定到一个名叫 value 的 prop 上
* 监听input事件，当组件内触发了input事件，接受传递的值作为修改value值

所以组件定义中应该使用props接受value值，通过`$emit()`触发input事件并传递新的值

注意，对于单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的，可以通过model选项修改v-model指定的prop和event配置
```html
<!-- === 内置组件使用v-model -->
<input v-model="searchText">
<!-- 等价于：-->
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>

<!-- 自定义组件使用v-model  -->
<custom-input v-model="searchText"></custom-input>
<!-- 等价于 -->
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
Vue.component('custom-input', {
  props: ['value'],
  template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
});
```

