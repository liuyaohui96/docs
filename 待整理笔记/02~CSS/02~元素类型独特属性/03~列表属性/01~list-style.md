
## list-style
list-style 是`list-style-type, list-style-image, list-style-position`的属性缩写

```css
list-style: <list-style-type> <list-style-image> <list-style-position>
```
1. list-style-type
2. list-style-image
3. list-style-position

## list-style-type
list-style-type 定义列表类型
```css
list-style-type: none; /* 移除 类型 */
list-style-type: decimal;
list-style-type: decimal-leading-zero; /* 前导0 */
list-style-type: lower-alpha; /* 小写字母 */
list-style-type: upper-alpha; /* 大写字母 */
list-style-type: lower-roman; /* 小写罗马 */
list-style-type: upper-roman; /* 大写罗马 */
```

## list-style-image
list-style-image 可以使用项目符号图像作为项目符号
```css
list-style-image: none; /* default */
list-style-image: url(/images/list-style-image.png);
```

## list-style-position
list-style-position 定义项目符号在列表中的位置
```css
/* ===  */
list-style-position: outside; /* default */
list-style-position: inside; /* 在为列表内容的一部分*/
```