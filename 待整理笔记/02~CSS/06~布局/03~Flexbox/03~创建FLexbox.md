
## 创建FlexBox
创建Flexbox，需要在布局的元素的父容器应用`display:flex | display:inline-flex`，对于父容器的直接子元素就会成为flex items，默认的flexbox有以下默认属性：
1. `flex-direction:row` 使得子元素按行方向进行排列。
2. 主轴起始线为`justify-content:start`，即flex items 从main axis的起始线开始布局
3. `flex-wrap:nowroap`,容器内的元素不换行
3. flex items 在main axis 方向不会被扩展（stretch），但会被收缩（shrink）
3. `align-items:stretch`使得items的高度扩展到最高的item，即自动填满cross axis 的大小。容器内的元素不会向主轴拉伸，会向交叉轴拉伸
4. `flex-basis:auto`