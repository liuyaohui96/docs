
## v-text
v-text 预期的值可以用于更新元素的textContent，语法是`v-text="textContent"`。如果要更新部分的 textContent ，需要使用` {{ Mustache }}` 插值。

```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```