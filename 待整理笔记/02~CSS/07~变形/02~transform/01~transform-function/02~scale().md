
## scale
1. scale()
2. scaleX() & scaleY() & scaleZ()
3. scale3d()

## scale()
scale() 用于通过向量形式定义的缩放值来放大或缩小元素

可能的属性值：
1. 单一的`<number>`即指定了一个缩放系数，同时作用于X轴和Y轴让该元素进行缩放
2. 两个`<number>`即分别指定了2D比例的X轴和Y轴的缩放系数

当坐标值超出[-1，1]范围时，元素沿该尺寸增长;在[-1，1]之间时，它会收缩。如果为负，则结果在该维度上为点反射。
值为1无效。

```css
scale(sx[, sy])
```

## scaleX() & scaleY() & scaleZ() 
scaleX() & scaleY() & scaleZ() 定义各自方向上的缩放

```css
/* scaleX(sx) 是 scale(sx, 1) 或 scale3d(sx, 1, 1) 的一个速记/缩写  */
/* scaleX(-1) 定义一个 轴向对称性，可以实现翻转，它具有一个垂直轴通过原点 */
transform: scaleX(s)

/* scaleY(sy) 是 scale(sy, 1) 或 scale3d(sy, 1, 1) 的一个速记/缩写  */
transform: scaleY(s)

/* scaleZ(sz) is 相当于 scale3d(1, 1, sz) 或者 scale(1, 1, sz)*/
/* 立体元素的厚度缩放 */
transform: scaleZ(s)
```
## scale3d()
scale3d（）3D空间中对元素进行缩放。

同质变换： 所有三个坐标都相等，则缩放比例是均匀的（各向同性），并且将保留元素的长宽比。
```css
scale3d(sx, sy, sz)
```