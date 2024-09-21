## BFC
BFC(Block Formatting Context)指块级格式上下文，BFC 规定了内部的 Block Box 如何布局, 同一个BFC内这样布局：
1. BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
2. 内部的 Box 会在垂直方向上一个接一个放置
3. Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
4. 每个元素的 margin box 的左边，与包含块 border box 的左边相接触
5. BFC 的区域不会与 float box 重叠，计算 BFC 的高度时，浮动元素也会参与计算

外边距折叠的边距计算：
1. 两个相邻的外边距都是正数时，折叠的结果是它们两者中较大的值
2. 两个相邻的外边距都是负数时，折叠的结果是它们两者中绝对值较大的值
3. 当两个外边距一正一负时，折叠的结果是两者相加的和


## 创建BFC的方式
1. 根元素html
2. dispaly: inline-block | table | flow-root | flex | inline-flex
3. overflow: !visible
4. float 的值不为none
5. postition: absolute | fixed | sticky

## 应用场景
1. margin问题的解决：
    * 盒子上下margin重叠
    * 父子盒子margin传递
2. 浮动问题：内部元素浮动，浮动子元素不参与高度计算，导致高度塌陷
3. 覆盖问题：使得内容不和浮动元素重叠(如aside 和 main)


## 其他格式上下文
1. IFC（Inline Formatting Context) 指的是内联格式上下文，IFC的线框(line box)由其包含元素中最高的的实际高度决定，不受垂直方向上的margin/padding的影响。
2. Flex Formatting Context 指的是flex格式上下文，容器内的元素都是伸缩元素
3. Grid Formatting Context 指的是grid格式上下文。可以在网格容器上定义行和列，在具体的网格item定义网格行和列实现布局。
