## flex元素属性-order
order 属性规定了弹性容器中的可伸缩项目在布局时的顺序。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

flex items 默认order值为0，整数值越大，排列顺序越往后。如将一个flex item 提到最前面，可以为它设置`order:-1`
```css
/* === order 定义flexbox 项目的次序 */
order: 0; /* default */
order: <integer>
```