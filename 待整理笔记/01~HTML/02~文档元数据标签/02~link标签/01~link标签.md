
## link 标签
`<link>`标签定义本页面与外部资源的链接

```html
<!-- 
href：定义资源路径 

rel：定义link的类型
  stylesheet：样式表
  icon: favicon
  author: 作者网站
  next：下一个页面
-->
<link href="main.css" rel="stylesheet">
<!-- icon 需要使用.ico 后缀的文件 -->
<link rel="icon" href="favicon.ico">  

<!-- 可以设置media，根据媒体类型和属性加载指定外部资源 -->
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">

<!-- dns-prefetch链接关系类型用于指示将用于获取所需资源的来源，使得用户代理应尽早解析。 -->
<link rel="dns-prefetch" href="//example.com">
```