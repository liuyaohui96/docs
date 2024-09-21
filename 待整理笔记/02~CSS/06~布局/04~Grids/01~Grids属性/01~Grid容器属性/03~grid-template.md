
## grid-template
grid-template 是 grid-template-rows， grid-template-columns，grid-template-areas的缩写属性
```css
/* none: 设置三个属性为初始值 */
/*  <grid-template-rows> / <grid-template-columns>：
  设置 grid-template-columns & grid-template-rows
  设置 grid-template-areas 为none
*/
grid-template: none | <grid-template-rows> / <grid-template-columns>;

/* 更复杂的例子 */
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}

/* 相当于 */
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```