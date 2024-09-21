
## 表单样式的reset
在某些浏览器中，表单元素默认情况下不继承字体样式。因此，如果要确保表单字段使用在正文或父元素上定义的字体，则应将此规则添加到CSS中。
```css
button, 
input, 
select, 
textarea { 
  font-family : inherit; 
  font-size : 100%; 
} 
```

为了保持一致性，最好在所有元素上设置margin & padding 设置为0，还有设置盒子模型为`border-box`确保在设置表单元素的宽度和高度一致

在不需要的情况下在<textarea>上设置溢出：auto以停止IE显示滚动条
```css
textarea {
  overflow: auto;
}
```

所以，表单的reset样式为：
```css
textarea {
  overflow: auto;
}
```