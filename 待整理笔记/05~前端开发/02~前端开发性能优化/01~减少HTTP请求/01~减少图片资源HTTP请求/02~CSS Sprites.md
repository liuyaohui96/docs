
## CSS Sprites
CSS Sprites，精灵图，也称雪碧图。原理是将多张图片合并多一张图片，在使用了很多小图标的网站有应用场景（如gmail）。

实现方法：
* 使用生成器将多张图片打包成一张精灵图，并为其生成合适的 CSS
* 每张图片使用`background-image，background-repeat，background-position`的组合进行背景定位

通过CSS的`backgrond-position`属性，将HTML元素放在图片的合适位置上。

优点：
* 减少http请求，提高页面加载速度
* CSS Sprites能减少图片的字节大小。合并后的图片比合并前的图片综合要小，因为降低了图片自身的开销（颜色表，格式信息等）

缺点：
1. 合并图片麻烦，合并时需预留好足够空间，测量繁琐
2. 维护麻烦，修改一个图片可能需要重新布局