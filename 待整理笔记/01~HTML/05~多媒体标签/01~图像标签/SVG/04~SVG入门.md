
## SVG入门
```html
<!-- 例子 -->
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```
绘制流程包括以下几步：
* 从svg根元素开始：
* 舍弃来自 (X)HTML的doctype声明，因为基于SVG的DTD验证导致的问题比它能解决的问题更多。
* 属性version和属性baseProfile属性是必不可少的，供其它类型的验证方式确定SVG版本。
* 作为XML的一种方言，SVG必须正确的绑定命名空间 （在xmlns属性中绑定）。 请阅读命名空间速成 页面获取更多信息。
* 绘制一个完全覆盖图像区域的矩形 `<rect/>`，把背景颜色设为红色。
* 一个半径80px的绿色圆圈`<circle/>`绘制在红色矩形的正中央 （向右偏移150px，向下偏移100px）。
* 绘制文字“SVG”。文字被填充为白色， 通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。

SVG文件全局有效的规则是“后来居上”，越后面的元素越可见。

## web服务器提示
对于普通SVG文件，服务器应该会发送下面的HTTP头
```shell
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

对于gzip压缩的SVG文件，服务器应该会发送下面的HTTP头
```shell
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```