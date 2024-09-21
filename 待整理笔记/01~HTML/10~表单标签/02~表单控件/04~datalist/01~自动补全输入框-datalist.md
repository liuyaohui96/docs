
## 自动补全输入框
使用`<datalist>`元素及其`<option>`子元素来指定要显示的值，可以表单控件提供建议的、自动完成的值

定义数据列表后，id属性绑定为需要提供自动补全功能的表单小部件的`list`属性指定的值
```html
<!-- datalist -->
<!-- Datalist元素有助于提供文本框自动完成特性 -->
<input type="text" list="country">
<datalist id="country">
  <option value="beijing">
  <option value="guangzhou">
</datalist>
```