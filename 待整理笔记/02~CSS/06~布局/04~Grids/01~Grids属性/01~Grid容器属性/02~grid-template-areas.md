
## Grids容器属性-grid-template-areas
1. grid-template-areas

##  grid-template-areas(grid 容器属性)
定义一个grid tempalte，grid items 的 `grid-area`可以使用其中的名称来进行布局。
```css
grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
grid-template-areas: none | <string>+
/* === 例子  */
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

/* 留出空白的网格单元出空单元的方法是使用句点符`.` */
/* 使得侧边栏下面的三个单元格为空 */
grid-template-areas: 
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      ".  .  .  ft   ft   ft   ft   ft   ft";
```