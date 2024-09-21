
## 背景图像的滚动方式-background-attackment
background-attachment 定义背景图像的滚动方式。

属性值可能是：
1. fixed 背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
2. local 背景相对于元素的内容固定，如果一个元素拥有滚动机制，背景将会随着元素的内容滚动
3. scroll 背景相对于元素本身固定， 而不是随着它的内容滚动

```css
background-attachment: scroll | fixed | local
/* === 例子  */
background-attachment: scroll; /* defualt 背景图像随着页面滚动 */
background-attachment: fixed;   
```