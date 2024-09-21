
## name & content
```html
<!-- === 使用name指定要设置的属性，使用content指定要设定的属性值 -->
<!-- author指示作者 -->
<meta name="author" content="liuyaohui">
<!-- description -->
<meta name="description" content="how to describe the document">
<!-- keyword -->
<meta name="keyword" content="keyword1, keyword2, ..." />

<!-- robots 指定搜索引擎如何收录页面 -->
<!-- noindex 指示不对页面进行收录 -->
<meta name="robots" content="noindex">
<!-- nofollow 指示收录页面，但不收录页面上链接的其他页面 -->
<meta name="robots" content="nofollow">

<!-- viewport -->
<meta name="viewport" content="...">
<!-- 
the content value may be
1. width or device-width
2. height or device-height
3. initial-scale: A positive number between 0.0 and 10.0
4. maximum-scale: A positive number between 0.0 and 10.0
5. minimum-scale: A positive number between 0.0 and 10.0
6. user-scalable: yes or no
 -->
<!-- example -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 主要针对双内核浏览器，使用webkit内核 -->
<meta name="renderer" content="webkit">
```