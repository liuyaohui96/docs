## grid-area
1. grid-area 可以引用`grid-template-areas`创建的grid布局模板中的名称，从而实现所在grid item 的布局
2. grid-area 是grid-row-start、grid-column-start、grid-row-end 和 grid-column-end 的简写。它的值可以是：
    * 如果是四个值：则依次是grid-row-start、grid-column-start、grid-row-end 和 grid-column-end
    * 省略了grid-column-end：如果grid-column-start 是一个`<custom-ident>`(用户自定义字符串标识符),则grid-column-end 也会赋值为该`<custom-ident>`，否则，grid-column-end为auto值
    * grid-row-end被忽略：如果grid-row-start 是一个`<custom-ident>`(用户自定义字符串标识符),则grid-row-end 也会赋值为该`<custom-ident>`，否则，grid-row-end为auto值
    * grid-column-start 被忽略：如果grid-row-start 是一个`<custom-ident>`(用户自定义字符串标识符),则四个值也会赋值为该`<custom-ident>`，否则，其余值为auto值

```css
grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;

/* === 例子 */
/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;
grid-area: header;

/* <integer> && <custom-ident>? values */
grid-area: 1 / col4-start / last-line / 6;

/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;
```