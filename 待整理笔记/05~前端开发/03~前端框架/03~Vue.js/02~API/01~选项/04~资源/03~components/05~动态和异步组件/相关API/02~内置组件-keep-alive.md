
## keep-alive
`<keep-alive>` 用于包裹动态组件，缓存不活动的组件实例，而不是销毁它们，保留组件状态或避免重新渲染。是一个抽象组件，自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

当组件在 `<keep-alive>` 内被切换，组件的`activated`和`deactivated`生命周期钩子会相应被调用（在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 `<keep-alive>` 树内的所有嵌套组件中触发。）

`<keep-alive>` 设计用来为一个直接子组件被切换的情景，不支持`v-for`，如果存在多个条件性的子元素，要求同时只有一个子元素被渲染
```html
<!-- 基本 -->
<keep-alive>
  <component :is="view"></component>
</keep-alive>

<!-- 多个条件判断的子组件 -->
<keep-alive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</keep-alive>

<!-- 和 `<transition>` 一起使用 -->
<transition>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</transition>
```

`<keep-alive>` 上的特性：
* include 和 exclude 特性：允许组件有条件地缓存，二者都可以用逗号分隔字符串、正则表达式或一个数组来表示。匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配
* max：指定缓存组件实例的最大数量


```html
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>

<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```