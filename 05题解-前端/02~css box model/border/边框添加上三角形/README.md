
## 边框添加三角形
边框添添加上三角形：
1. 对于元素盒子
    * `position:relative`，使得边框上三角形可以使用`position:absolute`进行定位
    * 元素边框`border: $border-width solid #000`
    * `padding: $padding-width`内边框，分离内容与border，更加美观
2. 边框上的两个上三角形分别由`::before`和`::after`伪元素创建
3. 第一个上三角形是，两个三角形的共有样式，设置
    * `position:aboulte`
    * `bottom:100%`在元素的最上面开始定位
    * `left: $left`设置随意的左位置值
    * `width:0;height:0`设置元素的content box大小
    * `border: $triangle-border-width solid transparent` 设置border
    * `border-bottom-color: #000` 显示上三角形
    * `content: ''`
4. `::after`伪元素创建的第二个上三角形用于用白色背景覆盖上一个三角形
    * `left: $left + $border-width`：比上一个三角性左位置值大`$border-width`的值，使得上一个三角形的左边框不被覆盖
    * `border-width: $triangle-border-width - $border-width`：宽度是上一个三角形的宽度减去元素盒子边框宽度，使得这个三角形背景能够覆盖，只留下`$border-width`宽度的三角形
    * `border-bottom-color: #fff` 设置覆盖的背景