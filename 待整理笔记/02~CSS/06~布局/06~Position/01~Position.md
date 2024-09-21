
## position
1. static：每一个元素的默认position属性，元素遵从normal flow，所以`left|right|top|right|z-index`不会对该元素起作用
2. relative：像position:static元素一样，元素的原始位置保持在normal flow，但是`left|right|top|right|z-index`对该元素起作用，从文档流的原始位置进行偏移
3. absoulte: 元素从normal flow 中移除，其他元素会当他不存在一样，`left|right|top|right|z-index`起作用，相当于最近的非static定位的祖先元素进行定位，如果都不指定定位，则相对于整个html文档
5. fixed：元素从normal flow 中移除，相对于浏览器视口进行定位（不受滚动的影响）
6. sticky：是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位 
```css
/* === 使用position属性进行定位 */
position: static; 

/* 保持在正常文档流，相当与元素原来正常文档流中的位置进行偏移 */
position: relative;
left: 10px; /* 相对与元素原来的位置向左移动10px */

/* 脱离文档流*/
position: absolute;

/* 脱离文档流，相对于浏览器视口进行定位 */
position: fixed;

position: sticky; 
```