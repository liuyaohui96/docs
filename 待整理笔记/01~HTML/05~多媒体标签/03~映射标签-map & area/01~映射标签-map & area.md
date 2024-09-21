
## map & area
map 标签与`<area>` 属性一起使用来定义一个图像映射（一个可点击的区域）

`<area>` 在图片上定义一个热点区域

使用步骤：
1. `<img>`元素上使用usemap属性,属性值是`#mapname`
2. map 设置name属性
3. map的 `<area>`属性可以设置title，href（链接），shape（形状），coords(坐标)

```html
<map name="example-map-1">
  <area shape="circle" coords="200,250,25" href="another.htm"  alt="/>
  <area shape="default" />
</map>

<!-- 创建世界地图热点区域 -->
<img src="/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">
<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>
```

