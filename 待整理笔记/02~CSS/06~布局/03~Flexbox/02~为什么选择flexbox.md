
## 为什么选择flexbox
布局元素过程中，控制元素在哪个方向布局，控制他们彼此之间的间距，为了方便对齐，通常会选择用Flexbox作为布局的选择。

以下是flexbox的使用例子：
1. 导航。
    * 应用`justify-content`布局flex items
    * 为flex item 设置`flex`属性，元素自己去决定如何处理额外的空间
    * 使用margin 自动边距或者`justify-self`拆分导航

2. 元素居中

3. 绝对底部。`flex-direction:column`使得最后一个flex item可以扩展至绝对底部

4. 媒体对象。一侧具有图片或其他元素，另一侧具有文本。有时候需要翻转这个布局，使用`flex-direction`就可以轻松做到

5. 表单控制

6. 其他