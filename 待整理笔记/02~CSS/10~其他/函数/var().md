
## var()
var() 函数可以代替元素中任何属性中的值的任何部分，并可以使用使用逗号提供回退值。例如， var(--foo, red, blue) 将red, blue同时指定为回退值

```css
var( <custom-property-name> , <declaration-value>? )


/* 在父元素样式中 */
.component {
  --text-color: #080; /* header-color 并没有被设定 */
}

/* 在 component 的样式中： */
.component .header {
  color: var(--header-color, blue); /* 此处 color 被回退到 blue */
}

.component .text {
  color: var(--text-color, black);
}
```