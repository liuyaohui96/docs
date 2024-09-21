
## grid-template-rows & grid-template-columns
1. grid-template-rows 使用空格分隔的值列表分别定义grid的行
2. grid-template-columns 使用空格分隔的值列表分别定义grid的列
3. minmax的使用
4. repeat() 的使用

> fr 单位：fr单位代表网格容器中可用空间的一等份。例如创建定义了一个2fr轨道和两个1fr轨道，可用空间被四等分，其中两份给了第一个轨道，剩下两个轨道各占一份。

```css
/* `<track-size>` 可以是`lenfth|%|fr` */
/* `<line-name>` 自定义的网格线命名。不一定要把全部网格线都命名，只需要为布局时用到的关键线命名即可 */
grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
grid-template-columns: <track-size> ... | <line-name> <track-size> ...;

/* === 举例grid-template-rows， grid-template-columns与之相同，不再举例 */
/* 指定轨道之间的空间 */
grid-template-rows: 40px 4em 40px;
grid-template-rows: 1fr 2fr 1fr;
/* 网格线命名布局 */
.gridContainer{
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
/* 不仅可以有一个名称，还可以拥有两个名称，如下的row1-end & row2-start */
.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
/* 一旦有了网名的网格线，grid items就可以使用网格线名称定位 */
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}
```

## minmax的使用
```css
/* minmax(min, max) 是一个来定义大小范围的属性，大于等于min值，并且小于等于max值*/
grid-template-rows: 3ch auto minmax(10px, 60px);
grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
```

## repeat() 的使用
repeat() 标记来重复部分或整个轨道列表
```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
/* 使用repeat() */
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```