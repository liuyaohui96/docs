
## grid
grid属性是以下属性的缩写：
1. grid-template-rows & grid-template-columns
2. grid-template-areas
3. grid-auto-rows & grid-auto-columns
4. grid-auto-flow

```css
grid: <'grid-template'>
grid: <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?
grid: [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>

/* 例子 */
.container {
  grid: 100px 300px / 3fr 1fr;
}
.container {
  grid: auto-flow / 200px 1fr;
}
.container {
  grid: auto-flow dense 100px / 1fr 2fr;
}
.container {
  grid: 100px 300px / auto-flow 200px;
}
.container {
  grid: [row1-start] "header header header" 1fr [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```