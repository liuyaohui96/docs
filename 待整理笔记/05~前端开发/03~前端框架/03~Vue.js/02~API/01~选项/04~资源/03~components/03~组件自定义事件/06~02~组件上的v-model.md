
## 组件上的v-model
```html
<input v-model="searchText">

<!-- 相当于 -->

<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>

<!-- ====== -->
<!-- When used on a component, v-model instead does this -->
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
})
```

对于组件来说，v-model 使用`value`作为prop，和`input`作为event，对于checkbox, radio button，可能需要使用`value`属性做其他用途， 可以使用`model`选项避免冲突

```js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

//  === 相当于
<base-checkbox v-model="lovingVue"></base-checkbox>
```
