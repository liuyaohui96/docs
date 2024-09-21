
## 盒子模型属性-box-sizing
box-sizing 设置元素的width和height如何计算。

可能的属性值为：
* content-box：w3c标准，仅计算内容宽度作为width
* border-box：IE 标准，width包括content，padding，border
```css
box-sizing: content-box | border-box;

/*  width & height 属性只会在元素的content内*/
box-sizing: content-box; /* default */
/* width & height 属性在元素的border+paddind+contetn内应用 */
box-sizing: border-box;
```






