
## label
label 标签表示用户界面中某个元素的说明

将一个 `<label>` 和一个 `<input> `元素放在一起有以下好处：
* 标签文本不仅与其相应的文本输入在视觉上相关联; 它也以编程方式与它相关联。 这意味着，当用户点击到表单输入时，屏幕阅读器可以读出标签，使在使用辅助技术的用户更容易理解应输入哪些数据.
* 你可以单击关联的标签来聚焦或者激活 input，以及 input 本身。这种增加的命中区域为激活 input 提供了方便，包括那些使用触摸屏设备的。

如可将 `<label>` 和一个 `<input> `元素匹配在一起：
* 给 `<input>` 一个 id 属性。而 `<label>` 需要一个 for 属性，其值和 input 的 id 一样
* 将 `<input>` 直接放在 `<label>` 里，这种情况就不需要 for 和 id 属性

注意，当点击或者触碰（tap）一个与表单控件相关联的 <label> 时，关联的控件的 click 事件也会触发

```html
<label for="username">Click me</label>
<input type="text" id="username">

<label>Click me <input type="text"></label>
```

## lable可访问性问题
1. 不要在label元素内部放置会相互影响的元素，比如anchors，或者buttons。这样做会让用户更难激活/触发与label相关联的表单元素input
2. 在一个`<label>`元素内部放置标题元素会干扰许多辅助技术，原因是标题通常被当成一个导航助手。若标签内的文本需要在视觉上做些调整，应该使用CSS伪类更改样式并应用到`<label>`元素中。若一个form元素，或者form元素中的一部分需要一个标题，此时应该使用`<legend>`元素做标题，并将它放在`<fieldset>`元素中。