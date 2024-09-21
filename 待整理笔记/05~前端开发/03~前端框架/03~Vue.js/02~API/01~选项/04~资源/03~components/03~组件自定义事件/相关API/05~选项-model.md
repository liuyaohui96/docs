
## model
model 是一个对象，用于在使用`v-modle`时定制prop和event。默认情况下，组件使用`value`作为prop，使用`input`作为event，但是有些input types, 如checkbox, radio button 可能需要使用`value`prop作为不同的用途。可以使用model 选项避免这种冲突。

对象可以配置两个属性：
* prop：值是字符串，指示v-model绑定的prop，默认是value
* event：值是字符串，指示v-model绑定的event，默认是input

```js
Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  }
  // ...
}
```