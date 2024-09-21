
## grid-auto-flow
grid-auto-flow 为没有进行定位的grid items 进行自动的布局定位

```css
grid-auto-flow: row | column | row dense | column dense;
/* 例子 */
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
/* item-b, item-c and item-d 都没有进行明确的定位，将会应用grid-auto-flow 进行定位i */
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```