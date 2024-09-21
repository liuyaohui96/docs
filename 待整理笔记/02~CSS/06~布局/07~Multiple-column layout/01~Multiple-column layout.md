
## Multiple-column layout
1. coulumn-count: 指定创建的coulum数
2. coulumn-width: 指定创建列的宽度
3. column-gap: 指定创建列的间隔大小
4. column-rule: 在列间分割线的样式
5. column-span 的值被设置为all时，可以让一个元素跨越所有的列。一个跨越多列的元素被称为spanning element 

> 一般不把column-count 和column-width 一起设置
```css
column-count: 3;
column-width: 25em;
column-gap: 2rem;
column-rule:  <'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>

/* 
一个跨越多列的元素被称为spanning element 
*/
column-span: none | all;
```