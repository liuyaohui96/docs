
## transition-group
`<transition-group>`为多个元素或者多个组件应用过滤。特性有：
* tag：字符串，指定渲染一个真实的元素。 默认是渲染一个真实的span元素
* move-class：覆盖在过渡移动期间的css。`<transiton-group>`支持通过CSS transform实现移动过渡(moving transtion)，当一个孩子的位置在一次更新后发生改变，会自动应用css 类(由name属性生成或者`move-class`属性进行配置)
* 其他在`<transition>`上的除了mode的属性

注意，`<transiton-group>`的子节点必须拥有独一无二的key才能使动画正常工作


```html
<transition-group tag="ul" name="slide">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</transition-group>
```
## JavaScript 钩子
事件与在`<transition>`上的事件相同
