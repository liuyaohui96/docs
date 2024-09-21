
## 非 Prop 特性
非prop特性是指传递到组件，但组件的props却没有改prop的定义。

对于这些非prop特性，组件开发者不可能考虑到所有的应用场景，所以会被添加到这个组件的根元素上。

```html
<!-- 
data-date-picker="activated" 特性就会自动添加到 <bootstrap-date-input> 的根元素上
-->
<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
```

## 非prop特性的合并与替换
对于绝大多数特性来说，从外部提供给组件的值会替换掉组件内部设置的值， 例如组件外部`type="text"`会替换到组件内部`type="date"`，特殊的，class 和 style会进行值的合并。

## 非prop特性禁用继承
不希望组件的根元素继承特性，你可以在组件的选项中设置 `inheritAttrs: false`

注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定
```js
Vue.component('my-component', {
  inheritAttrs: false,
  // ...
})
```
