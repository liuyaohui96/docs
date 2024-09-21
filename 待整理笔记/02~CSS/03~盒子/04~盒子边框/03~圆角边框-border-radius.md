
## 边框圆角
border-radius 用于设置边框圆角，用一个半径时确定一个圆形，使用两个半径时确定一个椭圆，(椭)圆与边框的交集形成圆角效果。

还有单独的border-radius属性：
* border-top-left-radius
* border-top-right-radius
* border-bottom-right-radius
* border-bottom-left-radius

```css
/* === border-radius */
/* 使用百分比作为单位时，水平半径设置相对于盒子模型宽度，垂直半径相当于盒子模型高度 */
border-radius: 0; /* 溢出所有的 border radius */

/* 对于椭圆来说，长轴和短轴不等，所以 border-radius 还有种写法是用“/”来分开表示水平方向和垂直方向的半径 */
/* 代表的的是四个角的水平半径均为 10px，垂直半径均为 20px */
border-radius: 10px / 20px; 

/* 
表示的是左上、右下角的水平半径是 10px，垂直半径是 30px；
右上、左下角的水平半径是 20px，垂直半径是 40px。
 */
border-radius: 10px 20px / 30px 40px; 
```