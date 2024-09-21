
## float三列布局
```html
<div class="wrapper">
  <div class="left">left</div> 
  <div class="right">right</div> 
  <div class="main">main</div> 
</div>
```
* 容器清除浮动，防止后续布局混乱
* 左列左浮动，设置固定宽度
* 右列右浮动，设置固定宽度
* 主列（中间列）创建BFC，防止与浮动元素重叠