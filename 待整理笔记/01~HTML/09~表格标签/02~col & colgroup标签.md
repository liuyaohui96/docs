
## col & colgroup标签
1. colgroup：定义表中的一组列表
2. col：通常位于`<colgroup>`元素内，定义表格中的列，并用于定义所有公共单元格上的公共语义


## 使用colgroup为表格中的列提供共同的样式
```html
<!-- colgroup 和 col 多列分组 -->
<table>
  <colgroup>
    <col style="background-color: hotpink;">
    <col span="2" style="background-color: springgreen;">
  </colgroup>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
    <td>1960–1969</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
    <td>1960–1970</td>
  </tr>
</table>
```