
## v-for
v-for 基于源数据多次渲染元素，语法格式是：
* `v-for="alias in expression"`
* 也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法。
* v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数
具体是使用如下：
```html
<!-- 数组列表渲染 -->
<div v-for="item in items">
  {{ item.text }}
</div>
<div v-for="(item, index) in items"></div>
<!-- 对象列表渲染 -->
<div v-for="(val, key) in object"></div>
<div v-for="(val, name, index) in object"></div>
<!-- 也可以使用 of 代替 in, 使得它更加接近javascript的语法 -->
<div v-for="item of items"></div>
<!-- v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数 -->
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
Vue 2.6+ 后，v-for 也可以在实现了可迭代协议的值上使用，包括原生的 Map 和 Set，注意的是 Vue 2.x 目前并不支持可响应的 Map 和 Set 值，所以无法自动探测变更。

不建议同时使用 v-if 和 v-for，当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。这意味着v-if会在每一个迭代中运行

## template元素与v-for
类似于 v-if，如果需要循环渲染包含多个元素的内容，可以使用`<template>`元素包裹这些元素，然后在`<template>`元素上使用v-for

