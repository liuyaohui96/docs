
## Responsive images
1. max-width 方法
2. 使用srcset 和 sizes 属性
3. `<picture>`元素
4. w为什么我们不能使用 CSS 或 JavaScriptshi

## max-width 方法
`max-width: 100%` 既能保证图片会按自身的比例进行自适应，又能保证图片不会溢出容器

```css
img {
  max-width: 100%:
} 
```

max-width 方法有一个明显的缺点：
1. 如果显示的图像可能比其固有尺寸小很多，这浪费了带宽（如移动用户下载的图片可能是他们实际在浏览器窗口中看到的大小的几倍）
2. 可能不希望移动设备上的图像纵横比与台式机上的图像纵横比相同；移动设备上的图像较小，可能希望完全显示另一幅图像

## 使用srcset 和 sizes 属性
1. srcset属性定义了我们允许浏览器选择的图像。每个逗号之前的语法是
    * 一个文件名
    * 一个空格
    * 图像的固有宽度（像素为单位）。注意使用w单位，而不是px

2. sizes 属性定义了一组媒体条件（例如屏幕宽度）。每个逗号之前的语法是
    * 一个媒体条件（(max-width:480px)）
    * 一个空格
    * 当媒体条件为真时，图像将填充的槽的宽度

有了这些属性，浏览器会：
1. 查看设备宽度
2. 检查sizes列表中哪个媒体条件是第一个为真
3. 查看给予该媒体查询的槽大小
4. 加载srcset列表中引用的最接近所选的槽大小的图像

```html
<!-- 如果浏览器以视窗宽度为480px来加载页面 -->
<!-- 那么(max-width: 480px)的媒体条件为真，
    因此440px的槽会被选择，所以elva-fairy-480w.jpg将加载 -->
<!-- 旧的浏览器不支持这些特性，它会忽略这些特征。并继续正常加载 src属性引用的图像文件。 -->
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

##  `<picture>`元素
 `<picture>`元素更改显示的图像以适应不同的图像显示尺寸
```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
```
`<source>`元素包含一个media属性, 包含一个媒体条件;srcset属性包含要显示图片的路径

注意，何情况下，你都必须在 `</picture>`之前正确提供一个`<img>`元素以及它的src和alt属性，否则不会有图片显示。

不能使用 CSS 或 JavaScript 来做到这一效果的原因：通常减少了页面加载时间（一般能减少加载时间的20%），为了当浏览器开始加载一个页面, 它会在主解析器开始加载和解析页面的 CSS 和 JavaScript 之前先下载 (预加载) 任意的图片。但你你不能先加载好 `<img>` 元素后, 再用 JavaScript 检测可视窗口的宽度，如果觉得大小不合适，再动态地加载小的图片替换已经加载好的图片，这样的话, 原始的图像已经被加载了, 然后你又加载了小的图像，这种行为给用户带来不好的体验。