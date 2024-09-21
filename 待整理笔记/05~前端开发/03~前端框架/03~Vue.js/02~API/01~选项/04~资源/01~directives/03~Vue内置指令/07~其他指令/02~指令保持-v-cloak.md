
## v-cloak
v-cloak 不需要表达式，用于保持元素的指令直到相关vue实例完成编译。和 CSS 规则如 `[v-cloak] { display: none } `一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

```html
[v-cloak] {
  display: none;
}
<!-- The <div> 不会显示，直到编译结束-->
<div v-cloak>
  {{ message }}
</div>
```
