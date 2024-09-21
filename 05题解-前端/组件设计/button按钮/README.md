# 按钮
1. [按钮的一般样式](#按钮的一般样式)
2. [填充按钮](#填充按钮)
3. [按钮边框按钮](#按钮边框按钮)
4. [晃动按钮](#晃动按钮)


## 按钮的一般样式
按钮的一般样式：
1. 布局：`display: inline-block`
2. box-modal
    * `padding: $padding1 2*$padding1`
    * `border: 1px solid $border-color`
    * `border-radius: 4px`
3. 外观
    * `background-color:...`
    * `color:...`
    * `cursor:...`
4. 文本
    * 文本布局：`text-align:center;vertical-align:middle`

[回到顶部](#按钮)


## 填充按钮
填充按钮（fill button）：
1. 描述：当鼠标hover到button时候，白色背景的按钮背景过渡到指定颜色
2. `button`：
    * 一般样式
    * `background-color: #fff`
    * `transition: .3s all`
3. `button:hover`
    * `background-color: #000`修改背景颜色

[回到顶部](#按钮)

## 按钮边框按钮
按钮边框动画（button border animation）：
1. 描述：鼠标移动到button上方时候，按钮的上下边框宽度由固定宽度（过渡）变为100%的按钮宽度
2. `button`：
    * 按钮一般样式
    * 布局添加：`positon:relative`，用于为伪元素提供`::before | ::after`提供定位
3. 按钮的`:before | :after`分别创建上下边框
4. `::before, ::after`共有样式
    * 布局：`position:absolute`
    * box model：`width: $border-width;border: $border-width solid $border-color` 设置`width`宽度，影响固定上下边框宽度；`border-top | border-bottom: $border-width solid $border-color` 影响边框厚度
    * 外观：`content: ''`
    * 过渡：`transition: all .4s`
5. `::before`设置上边框
    * 布局：`right:0;top:-5px` 位置在按钮上方5px的右端
6. `::after`设置下边框
    * 布局：`left:0;bottom:-5px` 位置在按钮下方5px的左端
7. `button:hover::before, button:hover::after`设置
    * `width: 100%` 鼠标移动到button上方时候，按钮的上下边框宽度由固定宽度变为100%的按钮宽度

[回到顶部](#按钮)

## 晃动按钮
晃动按钮：
1. 描述：鼠标hover到鼠标上，按钮左右滑动
2. 动画：`@keyframes swing`设置不同阶段`transfrom:traslateX(...)`正反值移动，使得左右对应晃动，绝对值逐步减少，最后阶段回归原位`transfrom:translateX(0)`
3. `button`: 
    * 一般样式
4. `button:hover`：`animation: swing...`

[回到顶部](#按钮)
