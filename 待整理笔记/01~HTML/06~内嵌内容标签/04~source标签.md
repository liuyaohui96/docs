
## source标签
`<source>` 元素为 `<picture>, <audio> 或者 <video>` 元素指定多个媒体资源。这是一个空元素，所以只有一个开始标签，没有闭合标签

常用属性：
1. src：对于`<audio>和<video>`，媒体资源的地址是必需的。将`<source>`元素放在`<picture>`元素内时，将忽略此属性的值
2. type: 指定资源的MIME类型
3. srcset & media：响应式图片使用该属性（参考css中布局-响应式设计-响应式图片部分）


```html
<video controls>
  <source src="foo.webm" type="video/webm">
  <source src="foo.ogg" type="video/ogg"> 
  <source src="foo.mov" type="video/quicktime">
  I'm sorry; your browser doesn't support HTML5 video.
</video>
```