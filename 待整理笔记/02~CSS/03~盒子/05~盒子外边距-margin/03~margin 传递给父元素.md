
## margin传递给父元素
嵌套盒子中，如果对父元素的首个子元素设置了`margin-top`属性，`margin-top`应用在父元素上，而不是首个元素上

解决办法：
1. 父元素创建BFC
2. 父元素添加边框
3. 父元素设置padding-top,父元素在标准模型下高度尺寸会增加（可以减少相应height尺寸或者使用box-sizing:border-box)