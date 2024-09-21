
## object & param
1. object
2. param

## object
`<object>` 元素（HTML 嵌入对象元素）表示引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源。

常用属性：
1. data：一个合法的 URL 作为资源的地址
2. width & height ：设置宽度和高度
3. type：指定的资源的 MIME 类型

```html
<!-- Embed a flash movie -->
<object data="move.swf" type="application/x-shockwave-flash"></object>

<!-- Embed a flash movie with parameters -->
<object data="move.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object> 
```

## param
`<param>`元素为`<object>`元素定义参数

常用属性：
1. name：参数的名字。
2. value：参数的值