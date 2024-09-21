
## SVG
SVG 是用于描述矢量图像的XML语言，SVG用于标记图形，而不是内容

```html
<!-- === 例子，创建一个圆和一个矩形 -->
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

## SVG优缺点
优点：
* 文本编辑器中手动编写简单的SVG，但是对于复杂的图像，这很快就开始变得非常困难。 为了创建SVG图像，大多数人使用矢量图形编辑器，如 Inkscape 或 Illustrator
* 矢量图像中的文本仍然可访问（这也有利于 SEO)）
* SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过CSS或通过JavaScript编写的样式的元素。

缺点：
* SVG非常容易变得复杂，这意味着文件大小会增加; 复杂的SVG也会在浏览器中占用很长的处理时间。
* 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像
* 旧版浏览器不支持SVG，因此如果您需要在网站上支持旧版本的 IE，则可能不适合（SVG从IE9开始得到支持）。