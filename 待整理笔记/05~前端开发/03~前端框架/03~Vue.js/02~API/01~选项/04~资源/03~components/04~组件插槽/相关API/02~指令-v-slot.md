
## v-slot
v-slot 用于指示具名插槽或者接受接受prop插槽

语法是`v-slot[:插槽名][=slotProps]`：
* 如果省略插槽名，则默认为default

限制：
* 只能用于`<template>`元素上
* 或者在组件中只有一个独占默认插槽，这时可以使用缩写语法：在组件上使用`v-slot:default="slotProps"`或者`v-slot="slotProps"`






