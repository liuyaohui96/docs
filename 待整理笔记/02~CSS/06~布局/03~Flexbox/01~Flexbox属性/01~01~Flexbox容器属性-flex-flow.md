
## flexbox容器属性-flex-flow
flex-flow 是flex-direction 和 flex-wrap的缩写

```css
/* === flex-flow 是 <flex-direction> 和 <flex-wrap>的属性缩写 */
flex-flow: <flex-direction> <flex-wrap>

/* === flex-direction 定义main axis, 指示flexbox items 在容器内的排列方向 */
flex-direction: row | column | row-reverse | column-reverse;

/* === flex-wrap 定义在flexbox容器内的flexbox item在一行上布局，还是多行 */
/* flex-wrap初始值为 nowrap。这意味着，flex items 超过flexbox容器宽度，它们就会溢出 */
flex-wrap: nowrap | wrap | wrap-reverse;

/* === 例子 */
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
```