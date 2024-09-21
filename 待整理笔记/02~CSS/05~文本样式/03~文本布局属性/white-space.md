
## white-space
```css
/* === white-space 控制元素如何处理空格，如何对待换行，如何对待折叠*/
/*
一系列的空格被当作一个 
忽略换行
文字内容可以被折叠
*/
white-space: normal;  /* default */

/* 
一序列的空格被当作一个
忽略换行
文字内容不会被折叠，而是保持在一行
 */
white-space: nowrap;

/* 
一序列的空格都被被保留
只有在新的一行或者遇到<br>元素才会发生换行
 */
white-space: pre;

/* 
一序列的空格都被保留
换行发生在新的一行，或者遇到<br>元素，或者到达一行的末端
 */
white-space: pre-wrap;

/* 
一序列的空格都会当作一个
换行发生在新的一行，或者遇到<br>元素，或者到达一行的末端
 */
white-space: pre-line;

```

