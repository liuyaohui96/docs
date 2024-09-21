
## input 元素的校验约束
1. required 属性：## required 属性
当设置此属性时，如果输入为空，该表单将不会提交（并将显示错误消息）
2. pattern 属性：使用pattern 属性, 以 Regular Expression 作为 value 值。一些 `<input>` 元素类型不需要pattern 属性进行校验, 如email & url的单行输入框
3. 限制输入的长度：文本框 (`<input> 或 <textarea>`) 都可以使用minlength 和 maxlength 属性来限制长
```css
/* 例子 */
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```