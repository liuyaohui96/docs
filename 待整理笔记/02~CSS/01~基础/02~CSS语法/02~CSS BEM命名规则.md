## BEM 命名规则
Block（块），Element（元素），Modifier（修饰符）

Block（块）是单独组件，可以跨项目使用，而且它作为子组件（Element（元素））的命名空间，Modifier（修饰符）被用来标识一个 Block（块）或 Element（元素）是某个状态或不同结构或样式

```css
/* 块 组件 */
.block {
}

/* 元素 */
.block__element {
}

/* 修饰符 */
.block__element--modifier {
}
```
  