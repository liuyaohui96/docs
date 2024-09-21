
## 基本jQuery选择器
jQuery selector 大部分基于css selector分类为
1. 简单选择器
    * 通用选择器
    * 类选择器
    * id选择器
    * 属性选择器
    * 伪类选择器
    * 伪元素选择器
2. 组合选择器
    * 后代选择器
    * 孩子选择器
    * 兄弟选择器
    * 邻接兄弟选择器

除了以上css选择器，还有jQuery特定的选择器，还可以分类为：
1. 选择特定位置选择器
    * :first 第一个元素
    * :last 最后一个元素
    * :eq(index) 从0开始计数，第index+1个指定元素
    * :gt(index) 从0开始计数，第index+1个后的所有元素
    * :lt(index)  从0开始计数，第index+1个前的所有元素
    * :even 偶数位置的指定元素（从0开始计数，如0，2，4是偶数）
    * :odd 基数位置的指定元素 （从0开始计数）

2. 选择特定元素的选择器
    * :root 根元素
    * :header 所有的标题元素（h1-h6）
    * 选择特定表单元素的选择器
        * :input
        * :text
        * :password
        * :radio
        * :checkbox
        * :submit
        * :reset
        * :button input 元素type为button的所有元素
        * :image 元素type为image的所有元素
        * :file
        * :enabled 所有enabled状态的input元素
        * :disabled 所有disabled状态的input元素
        * :selected 所有selected状态的input元素
        * :checked 所有checked状态的元素

3. 选择特定状态的选择器
    * :animated 所有当前具有动画的所有元素
    * :focus 当前聚焦的元素
    * :hidden 所有被隐藏的元素
    * :visible 所有可视的元素
    * :empty 所有空的元素
    * :parent 所有是其他元素parent的元素。即拥有子元素的元素
    * :has(selector) 所有包含指定selector元素的元素
    * :contains(text) 所有包含指定text字符串的元素。字符串可以直接作为文本包含在元素中，也可以包含在子元素中


4.
过滤器：

| 过滤器 | 名称 |
| ------ | ---- |
| :even  | 偶数 |
| :odd   | 奇数 |
