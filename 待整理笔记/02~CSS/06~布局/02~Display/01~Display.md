
## Display
元素在noraml flow 中都会有一个默认的display值，用来设置元素的在normal flow中的默认行为。例如`p`元素是`display:block`使得段落在上一个元素下方显示, `a`元素是`display:inlne`, 使得链接将与文本的其余部分保持内联，并且不会换行

可以使用`display`属性改变他们的值，从而改变元素在normal flow 中的布局


## display 属性
display 属性指定了元素的显示类型，可以分为外部显示类型和内部显示类型
* 外部显示类型定义了元素怎样参与流式布局的处理，决定盒是块级还是行内
* 内部显示类型定义了元素内子元素的布局方式，定了盒子内部元素是如何布局的
如设置 display: flex，在一个元素上，外部显示类型是 block，但是内部显示类型修改为 flex。 该盒子的所有直接子元素都会成为flex元素，会根据 Flexbox 规则进行布局

```css
/* === 块元素和内联元素的转换使用display */
display: none; /* 元素完全被移除 */
display: inline; /* 以内联元素形式显示 */
display: block; /* 以块级元素形式显示 */
display: inline-block; /* 不会换行，但是可以设置 width &height & margin 等特性 */

display: list-item; /* 向li元素一样显示，元素会作为列表显示 */

display: table; /* 内容和子元素像表格一样，元素会作为块级表格来显示 */
display: table-cell; /* 像table-cell 一样 */
display: table-row; /* 像table-row 一样 */

display: flex; /*  flexbox */
display: inline-flex; /* 不会换行，但是可以设置 width &height & margin 等特性 */

display: grid; /*  grid container */
display: inline-grid; /* 不会换行，但是可以设置 width &height & margin 等特性 */
```