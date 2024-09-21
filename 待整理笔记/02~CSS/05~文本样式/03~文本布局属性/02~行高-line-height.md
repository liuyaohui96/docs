
## 行高-line-height
对于块级元素，指定元素行盒（line boxes）的最小高度。对于非替代的 inline 元素，它用于计算行盒（line box）的高度。

具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。

推荐的行高大约是 1.5–2 (双倍间距。) 所以一般将文本行高设置为字体高度的1.5倍
```css
/* === line-height 属性用于增加文本在垂直方向上的空隙
，是一行字母的下缘低端到下一行字母上缘顶端的距离
 */
normal | <number> | <length> | <percentage>

/* === 例子 */
line-height: normal; /* default */
/* 百分比相对大小 */
line-height: 1.5; /* 相对于元素字体大小 */
/* px单位 */
line-height: 30px;
/* em单位，也是相对于元素字体大小 */
line-height: 0.8em;
```

## 用于垂直居中
line-height 也常用于文本垂直居中：
* 单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。
* 多行文本垂直居中：需要设置display属性为inline-block