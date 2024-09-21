
## 将SVG添加到页面
1. `<img>`
2. 在HTML中引入SVG代码
3. 使用 `<iframe>` 嵌入SVG

## img
通过 `<img>`元素嵌入SVG，在 src 属性中引用
```html
<img src="equilateral.svg" alt="triangle with all three sides equal"
    height="87px"
    width="100px" />
```
优点：
* 快速，熟悉的图像语法
* 通过在`<a>`元素嵌套`<img>`，使图像轻松地成为超链接

缺点：
* 无法使用JavaScript操作图像
* CSS控制SVG内容，则必须在SVG代码中包含内联CSS样式。 （从SVG文件调用的外部样式表不起作用）

## 在HTML中引入SVG代码
```html
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="green" />
</svg>
```
优点：
* 将 SVG 内联减少 HTTP 请求，可以减少加载时间。
* 内联SVG是唯一可以让您在SVG图像上使用CSS交互（如:focus）和CSS动画的方法（即使在常规样式表中）。可以为 SVG 元素分配class和id，并使用 CSS 修改样式，无论是在SVG中，还是 HTML 文档中的 CSS 样式规则。 实际上，可以使用任何 SVG外观属性 作为CSS属性。
* 可以通过将 SVG 标记包在`<a>`元素中，使其成为超链接。

缺点：
* 只适用于在一个地方使用的SVG。多次使用会导致资源密集型维护（resource-intensive maintenance）
* 额外的 SVG 代码会增加HTML文件的大小
* 浏览器不能像缓存普通图片一样缓存内联SVG

## 使用 iframe 嵌入SVG
```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```
这绝对不是最好的方法：
* iframe有一个回退机制，如果浏览器不支持iframe，则只会显示回退
* 除非 SVG 和您当前的网页具有相同的 origin，否则你不能在主页面上使用 JavaScript 来操纵 SVG。