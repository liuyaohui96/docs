
## Media query
媒体查询可以根据设备类型（例如`print|screen`)，设备特征和参数（例如屏幕分辨率和浏览器适口宽度）来调整网站的布局

Media query的使用方式
1. CSS @media 和 @import
2. `<style>|<link>|<source>`和其他具有media属性的HTML元素
3. 监测媒体状态的JavaScript方法：`Window.matchMedia()`和`MediaQueryList.addListener() `

```html
<!-- link元素中的CSS媒体查询 -->
<!-- 即使媒体查询返回false，<link> 标签指向的样式表也将会被下载(但是它们不会被应用) -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
```