
## translate()
1. translate()
2. translateX() & translatrY() & translateZ()
3. translate3d()

## translate
translate() 在水平和/或垂直方向上重新定位元素

可能的属性值
1. 一个`<length-percentage>`表示X轴和Y轴使用一样的值进行二维上的平移
2. 两个`<length-percentage>`表示在二维上分别按照指定X轴和Y轴的值进行的平移
百分比值是指由transform-b​​ox属性定义的参考box的宽度

```css
translate(<length-percentage> , <length-percentage>?)

/* === 例子 */
translate(10px); /* Equal to translateX(10px) */
transform: translate(100px, 200px);
```

## translateX() & translatrY() & translateZ()
translateX() & translatrY() & translateZ() 各自的轴上平移
```css
/* translateX()函数表示在二维平面上水平方向移动元素 */
translateX(tx);
/* translateY()函数表示在二维平面上垂直方向移动元素 */
translateY(ty);

 /* translateZ(tz) 等同于 translate3d(0, 0, tz) */
 /* 指定向内后者向外移动的距离 */
traslateZ(tz)
```

## translate3d() 
translate3d() 函数在3D空间内移动一个元素的位置

```css
/* 注意tz不能是一个percentage */
translate3d(tx, ty, tz)
```