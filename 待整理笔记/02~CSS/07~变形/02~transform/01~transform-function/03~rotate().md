
## rotate
1. rotate()
2. rotateX & rotateY() & rotateZ()
3. roate3d()

## rotate()
rotate()函数 将元素围绕一个定点（由transform-origin属性指定）旋转的变换。

参数为旋转的角度：若角度为正，则顺时针方向旋转，否则逆时针方向旋转。180°的旋转称为点反射 (point reflection)。
```css
rotate(a)

/* === 例子 */
rotate(45deg); /* Equal to rotateZ(45deg) */
```

## rotateX & rotateY() & rotateZ()
rotateX & rotateY() & rotateZ() 在各自方向上实现旋转

> rotateX 正直向上，rotateY 正值向右
```css
/* rotateX() 引起的旋转量由<angle>指定, 如果为正，则顺时针方向移动；如果为负，则逆时针方向移动 */
/* rotateX(a) 相当于 rotate3d(1, 0, 0, a). */
rotateX(<angle>) 

/* rotateY(a) 相当于 rotate3d(0, 1, 0, a). */
/* 如果为正，则顺时针方向移动；如果为负，则逆时针方向移动。 */
rotateY(<angle>) 

/* rotateZ(a) 相当于 rotate(a) or rotate3d(0, 0, 1, a)。 */
/* 如果为正，则顺时针方向移动；如果为负，则逆时针方向移动。 */
rotateZ(<angle>) 
``` 

## roate3d()
roate3d() 在3d空间进行旋转。旋转使元素能够绕固定轴移动，移动量由指定角度定义；如果为正值，则运动将为顺时针，如果为负值，则为逆时针。

注意，相对于平面上的旋转，三维旋转的组成通常不是可交换位置顺序的，这意味着旋转的应用顺序是至关重要的。
```css
/* 
x：旋转轴X坐标方向的矢量
y： 旋转轴Y坐标方向的矢量
z：旋转轴Z坐标方向的矢量
a：旋转角度。正的角度值表示顺时针旋转，负值表示逆时针旋转
 */
rotate3d(x, y, z, a)
```

