canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成

SVG 与 Canvas 两者间的区别

1. SVG 是指可伸缩的矢量图形, SVG 是一种使用 XML 描述 2D 图形的语言,适合带有大型渲染区域的应用程序（比如谷歌地图,矢量图，缩放不影响显示）
2. Canvas 通过 JavaScript 来绘制 2D 图形,Canvas 是逐像素进行渲染的，适合游戏

```HTML
<canvas id="canvas" width="300" height="300">
  An alternative text describing what your canvas displays.
</canvas>
```

```JavaScript
/*一些属性
1. 绘制线条
    context.moveto(x, y)
    context.lineto(x, y)
    context.stroke()
2. 绘制文字
    context.font='';
    context.fillText('', x, y)

3. 绘制图像
    context.drowImage(img, x, y)
*/
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```
