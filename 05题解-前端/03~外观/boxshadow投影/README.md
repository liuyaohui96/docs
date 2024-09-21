


## box-shadow
1. `box-shadow: [inset] $offset-x $offset-y $blur-radius $spread-radius $color`


## 动态box-shadow
根据背景的动态box-shadow
1. 元素设置`position: relative;  z-index:1;background: $bg;`
2. 元素的伪元素`::after`设置
  * `position: absolute; top: $offset-top;....;z-index: -1;width: 100%; height; 100%;background: inherit` 设置伪元素在元素后进行偏移，宽度高度背景颜色相同
  * `filter: blur(4px); opacity: .7`模拟box-shadow效果