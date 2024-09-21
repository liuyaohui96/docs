

## 浮动标题列表
1. html格式是`dl>(dt>dd*n)*n`
2. 布局：dl是两列的列表，第一列是dt，第二列是dd
    * 设置dl`display:grid;grid-template-columns: 50px 1fr;`
    * dt设置`grid-column: 1`
    * dd设置`grid-column: 2`
3. 修饰dl：宽度，高度，外边距，圆角，背景颜色，文本颜色等
4. dt设置
    * `position: sticky; top: 1px` 设置标题浮动
    * `justify-self: center;align-self: center;`设置居中
    * `width: 30px; height: 30px; border-radius: 50%` 设置圆形
    * `display: inline-flex; justify-content: center; align-items: center;` 设置圆形内文本居中
5. dd设置内边距，`margin:0`覆盖原样式