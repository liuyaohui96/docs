

## 高度与宽度的比例
1. 元素设置`width` & `background`
2. 设置元素的`::before`伪元素：
    * `content: ''`
    * `float: left`：设置浮动，脱离文档流，不影响元素布局
    * `padding-top: <percentage>`为宽度的百分比
3. 设置元素的`::after`伪元素，使用clearfix`content: '';display: block;clear:both`清除浮动，从而使得`::before`伪元素的浮动高度参与；或者元素添加`display:flow-root`等创建一个BFC，使得浮动元素参与高度计算
