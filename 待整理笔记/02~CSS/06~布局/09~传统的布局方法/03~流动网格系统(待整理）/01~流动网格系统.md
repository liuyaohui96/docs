
## 流动网格系统

在固定宽度网格系统中：
1. 内容宽度为60px, 12列为720px
2. 12列每列每个margin-left 为20（12*20=240px），故将容器padding-right设为20
3. 所以wrapper 总宽度为720 + 240 + 20 = 980px

流式布局中宽度太大或者太小都会导致不适合阅读，可以设置最大和最小宽度进行限制

```js
target / context = result
// 列宽
60 / 960 = 0.0625
// 间隔
20 / 960 = 0.02083333333
```

## calc 使用计算跨列百分比宽度
```css
.col.span2 { width: calc((6.25%*2) + 2.08333333%); }
.col.span3 { width: calc((6.25%*3) + (2.08333333%*2)); }
.col.span4 { width: calc((6.25%*4) + (2.08333333%*3)); }
.col.span5 { width: calc((6.25%*5) + (2.08333333%*4)); }
.col.span6 { width: calc((6.25%*6) + (2.08333333%*5)); }
.col.span7 { width: calc((6.25%*7) + (2.08333333%*6)); }
.col.span8 { width: calc((6.25%*8) + (2.08333333%*7)); }
.col.span9 { width: calc((6.25%*9) + (2.08333333%*8)); }
.col.span10 { width: calc((6.25%*10) + (2.08333333%*9)); }
.col.span11 { width: calc((6.25%*11) + (2.08333333%*10)); }
.col.span12 { width: calc((6.25%*12) + (2.08333333%*11)); }
```

## calc 计算列偏移
```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333%*2));
}
/* 或者使用计算好的百分比 */
.offset-by-one {
  margin-left: 10.41666666%;
}
```


