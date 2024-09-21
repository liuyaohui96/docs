
## transform-origin
变形的原点设置，操作元素的范围也是可以的

可能的组合值是：
1. 一个值
    * 必须是`<length>，<percentage>`，或 left, center, right, top, bottom关键字中的一个

2. 两个值
    * 其中一个必须是`<length>，<percentage>`，或left, center, right关键字中的一个。
    * 另一个必须是<length>，<percentage>，或top, center, bottom关键字中的一个。

3. 三个值
    * 前两个值和只有两个值时的用法相同
    * 第三个值必须是`<length>`，代表Z轴偏移量

默认是在元素的center位置
```css
/* === t例子 */
transform-origin: center; /* default */
transform-origin: top left;
transform-origin: 2px 30% 10px;
```