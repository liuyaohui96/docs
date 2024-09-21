
## Fluid grid
响应式网站不仅基于断点之间改变更改布局，还基于flexible grids，通过灵活的网格，在可能的断点进行适当布局的修改。

## float 创建灵活的网格布局
在响应式设计的早期，我们执行布局的唯一选择float,通过给每个元素指定一定百分比的宽度，并确保在整个布局中合计不超过100％，可以实现灵活的浮动布局。以下公式用于获取使用像素设计的布局并将其转换为百分比

如今，仍然可以在网络上见到这种方法，即使您不会使用基于浮动的灵活网格来构建现代网站，也需要进行了解。
```css
target / container = result 

/* 例如，target 列是60px 宽， container是960px，则宽度百分比是*/
.col { 
  width: 6.25%; /* 60 / 960 = 0.0625 */ 
} 

/* float + media query 例子*/
@media screen and (min-width: 600px) {
    .col1 {
        width: 31.24999999%;
        float: left;
    }
    .col2 {
        width: 64.58333331%;
        float: right;
    }
}
```

## 现代fluid grid的布局方法
1. flexbox
2. grid
3. multiple-column