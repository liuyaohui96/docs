
## v-if & v-else & v-else-if
v-if 根据表达式的值的真假条件性地渲染元素，语法是`v-if=boolean`。

特点：
* 切换元素显示时，元素及它的数据绑定 / 组件被销毁并重建。
* `<template>元素`：v-if 是一个指令，所以必须将它添加到一个元素上。此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含` <template> `元素。
* 条件变化时该指令触发过渡效果


`v-else`和`v-else-if`不需要表达式，配合`v-if`使用：
* `v-else` 前一个兄弟元素必须有`v-if`或者`v-else-if`
* `v-else-if` 前一个兄弟元素必须是`v-if`或者`v-else-if`

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## 用 key 管理可复用的元素
默认情况下，Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。在不需要重用的元素上添加一个具有唯一值的 key 属性即可。

```html
<!-- ===例子
下面的例子在一个登陆类型中的输入，在另外一个类型中不会清除 ，
因为两个条件块内的input元素相同，input元素就会就地重用，
解决方法是为input增加key属性，给他们一个唯一值加以区分
-->
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```


