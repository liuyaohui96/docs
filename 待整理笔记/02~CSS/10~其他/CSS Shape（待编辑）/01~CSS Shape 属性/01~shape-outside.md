
## shape-outside
shape-outside 定义相邻内联内容应该如何环绕，默认情况下，内联内容环绕margin，shape-outside 提供了一种自定义这种环绕的方法。默认在`margin-box`上设置形状

设置shape-outside形状的方式:
1. `<basic-shape>`
    * inset()：使用值inset（）可以将文本环绕在矩形上，可以添加偏移值，从而将任何环绕内容的线框拉近对象。取四个值作为top,right,bottom,left作为最终border-radius的值
    * circle()：创建一个圆形
    * ellipse()：椭圆形
    * polygon()：椭圆形

2. `<shape-box>`
    * content-box
    * padding-box
    * margin-box
    * border-box

3. `<image>`: `<url> | <image()> | <image-set()> | <element()> | <paint()> | <cross-fade()> | <gradient>`

```css
shape-outside: none | <shape-box> || <basic-shape> | <image>

/* === 例子 */
/* Keyword values */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Function values */
shape-outside: circle();
shape-outside: circle(50%);
shape-outside: ellipse(130px 140px at 20% 20%);
shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```