## 表单标签
表单用于将收集到的数据发送到服务器

常用属性：
* name: 表单名称
* action:  表单提交数据的URL，可以是相对或绝对地址。如果没有提供此属性，则数据将被发送到包含这个表单的页面的URL
* method：提交表单的方法，最常见的是GET方法和POST方法(详细见HTTP部分)

* autocomplete：用于指示 input 元素是否能够拥有一个默认值
* enctype：定义 MIME type，只有在post method 才产生效果，指定在提交表单时所生成的请求中的Content-Type的HTTP数据头的值。
  * enctype="application/x-www-form-urlencoded" 默认值，已编码为URL参数的表单数据
  * enctype="text/plain"
  * enctype="multipart/form-data" 推荐使用
* novalidate：提交时表单是否处于未验证状态。定义浏览器再提交时，不进行验证
可以用 :valid 和 :invalid CSS 伪类来按照表单是否正确填涂来给 `<form>` 元素指定样式

注意: 严格禁止在一个表单内嵌套另一个表单。嵌套会使表单的行为不可预知，而这取决于正在使用的浏览器。
```html
<form action="post" action="/foo" autocomplete novalidate></form>
```