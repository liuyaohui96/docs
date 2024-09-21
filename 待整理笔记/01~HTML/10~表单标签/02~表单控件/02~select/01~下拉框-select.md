
## 下拉内容
1. `<select>`
2. `<optgroup>`（HTML5）：包含在一个 `<select>` 元素中的一组选项

为`<select>`设置multiple属性设置多选下拉列表

```html
<!-- === l例子 -->
<select>
 <option value="foo">foo</option>
 <option value="foo">foo</option>
</select>

<!-- 多选 -->
<select multiple>
  <option>Banana</option>
  <option>Cherry</option>
  <option>Lemon</option>
</select>

<!-- optiongroup -->
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup> 
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```