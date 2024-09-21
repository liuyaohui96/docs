
## 按钮
使用 `<button>`元素或者`<input>`元素来创建一个submit, rest或者button按钮。

使用 `<button>`元素或者`<input>`元素来创建表单中的按钮行为都是一致的，区别在于，button内容写在开闭合标签之间，而input标签的内容卸载value属性上。

```html
<!-- submit -->
<button type="submit">
    This a <br><strong>submit button</strong>
</button>

<input type="submit" value="This is a submit button">

<!-- reset -->
<button type="reset">
    This a <br><strong>reset button</strong>
</button>

<input type="reset" value="This is a reset button">

<!-- buttton -->
<button type="reset">
    This a <br><strong>reset button</strong>
</button>

<input type="reset" value="This is a reset button">
```