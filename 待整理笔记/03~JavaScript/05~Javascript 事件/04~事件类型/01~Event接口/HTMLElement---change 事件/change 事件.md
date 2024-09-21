## change 事件
change 事件继承了Event 接口的方法和属性

事件触发取决于表单元素的类型（type）和用户对标签的操作
1. 当元素被:checked时（通过点击或者使用键盘）：如`<input type="radio"> 和 <input type="checkbox">`
2. 当用户完成提交动作时: 如点击了 `<select>`中的一个选项，从 `<input type="date">`标签选择了一个日期，通过`<input type="file">`标签上传了一个文件等
3. 标签的值被修改并且失焦后，但并未进行提交。对`<textarea>` 或者`<input type="text">`的值进行编辑后
