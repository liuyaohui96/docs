

```html
<!-- 文档内样式 -->
<style></style>
<!-- 外部样式 -->
<link rel="stylesheet" href="style.css" type="text/css"/>

<!-- 内联样式或行内样式 -->
<p sytle="...">foo</p>

<!-- 样式内使用@import规则引入外部样式文件-->
@import url("style.css");
```

## link标签与 ＠import 方法引入样式有区别
1. 加载的资源类型      
  link 标签是 html 标签， link 标签除了可以加载 CSS 外，还可以做其它的事情，比如定义 RSS等;@import只能加载 CSS
  
2. 加载时间     
  link引入的样式页面加载时同时加载;@import引入的样式需等页面加载完成后再加载

3. 兼容性     
  link没有兼容性问题;@import 是在 CSS2.1 提出的，低版本的浏览器不支持(不兼容ie5以下)

4. 是否可以通过javascript动态引入样式   
  link可以通过js操作DOM动态引入样式表改变样式，而@import不可以