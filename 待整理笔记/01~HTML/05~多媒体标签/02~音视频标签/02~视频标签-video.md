## HTML5视频
`<video>` 标签用于在文档中嵌入视频资源

常用属性：
* src属性：指定视频资源的路径
* controls：控制按钮
* autoplay：自动播放
* loop：循环
* muted：静音
* preload 页面加载时预加载
* poster 在视频播放前显示的图片资源的路径
* width & height: 指定宽度和高度
```html
<video src="/assets/HTML 5 Video.mp4" controls></video>

<video controls width="400" height="400"
       autoplay loop muted
       poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```