
## 在组件上使用v-for
自定义组件上，你可以像在任何普通元素上一样使用 v-for，但是，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，需要使用prop  
```html
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
```
