


## 三角形
三角形：
1. 无论上，右，下，右三角形都需要
   * `width: 0;height:0`设置元素盒子的content box尺寸
   * `border: 10px solid trasparent`设置元素盒子border box占据空间，但是设置四个方向颜色都为透明
2. 上三角形：设置`border-bottom-color: #ddd`，让border bottom显示颜色，形成上三角形，如右三角形设置`border-left-color: #ddd`
