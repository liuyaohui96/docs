
## v-pre
v-pre 不需要表达式，用于跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

```html
<!-- 显示原生的mustanche标签 -->
<span v-pre>{{ this will not be compiled }}</span>
```


