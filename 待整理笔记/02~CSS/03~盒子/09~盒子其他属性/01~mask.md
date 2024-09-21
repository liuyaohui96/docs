

## mask
 mask 可以部分或者完全隐藏一个元素的可见区域
```css
mask: url(mask.png);                       /* 使用位图来做遮罩 */
mask: url(masks.svg#star);                 /* 使用 SVG 图形中的形状来做遮罩 */
/* 使用 SVG 图形中的形状来做遮罩并设定它的位置：离上边缘40px，离左边缘20px */
mask: url(masks.svg#star) 40px 20px;       
```