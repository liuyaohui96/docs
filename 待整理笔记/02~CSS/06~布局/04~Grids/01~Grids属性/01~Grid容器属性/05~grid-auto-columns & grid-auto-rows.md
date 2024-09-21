
## grid-auto-columns & grid-auto-rows
自定自动生成的grid track（也称为隐式grid track）的大小。当grid items多于grid中的单元格或将grid items放置在显式grid之外时，会创建隐式grid track
```css
grid-auto-columns: <track-size> ...;
grid-auto-rows: <track-size> ...;

/* 例子 */
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
}
/* 在范围内 */
.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
/* .item-b从第5列开始到第6列结束，但从未定义第5或6列 */
/* 所以会产生隐式的grid track，宽度为变得不受控制 */
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
/* 设置隐式的grid track，指定宽度 */
.container {
  grid-auto-columns: 60px;
}
```