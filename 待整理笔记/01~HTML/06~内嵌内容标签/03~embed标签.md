
## embed
HTML `<embed>` 元素将外部内容嵌入文档中的指定位置，此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。

大多数现代浏览器已经弃用并取消了对浏览器插件的支持，所以如果您希望您的网站可以在普通用户的浏览器上运行，那么依靠 `<embed>` 通常是不明智的

常用属性：
1. src：嵌套资源的URL
2. width: 嵌套资源的宽度和高度
3. type：指定嵌套资源的MIME类型
```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480">
```