
# 水平垂直居中布局
1. [水平居中布局](#水平居中布局)
2. [垂直居中布局](#垂直居中布局)
3. [水平垂直居中](#水平垂直居中)


## 水平居中布局
水平居中布局：
1. 容器设置`text-align: center`，该属性只对图片、按钮、文字等`inline | inline-block、inline-table | inline-flex`行内元素的水平居中起作用，所以元素不是行内元素，可以使用`display: inline-*`属性修改
2. 容器设置`display: flex; justify-content: center`，宽度未确定情况下，常用的水平居中方式
3. 容器设置`display: table`，元素设置`display: table-cell; vertical-align: middle`
4. 容器设置`position: relative`，元素设置`position: absolute; left: 50%; transform: translate(-50%)`, 宽度未确定情况下，可以水平居中
5. 容器设置`position: relative`，元素设置`width: $width; position: absolute; left: 50%; margin-left: -0.5*$width`或者`left: calc(50%-$width)`
6. 元素设置`width: $width`，元素设置`margin: 0 auto`，宽度确定情况下，常用的水平居中方式
7. 元素设置`width: fit-content; margin: 0 auto`, 宽度的值是`fit-content`，也可以使用左右外边距设置水平居中
    
[回到顶部](#水平垂直居中布局)

## 垂直居中布局
垂直居中布局:
1. 元素是行内元素，使得它在容器内垂直居中：
    * 元素设置`line-height: $container-height`，常用方式
    * `padding-top: $padding-bottom; padding-bottom: padding-top`：因为某些原因可能不能使用padding
    * 元素不是行内元素，可以使用`display: inline-*`属性修改
2. 容器设置`display: flex; align-items: center`
3. 容器设置`display: table`，元素设置`display: table-cell; vertical-align: middle`
4. 容器设置`position: relative`，元素设置`position: absolute; top: 50%; transform: translate(0, -50%)`, 宽度未确定情况下，可以水平居中或者`top: calc(50%-$height)`
5. 容器设置`position: relative`，元素设置`height: $height; position: absolute; top: 50%; margin-top: -0.5*$width`

[回到顶部](#水平垂直居中布局)

## 水平垂直居中
结合上面的内容，水平垂直居中：
1. 元素是行内元素，使得它在容器内垂直居中
    * `text-align: ceneter`
    * `line-height: $container-height | padding-top: $padding-bottom; padding-bottom: padding-top`
2. 容器设置`dispaly: flex; align-items: center; justify-content: center`
3. 容器设置`display: table`，元素设置`display: table-cell; vertical-align: middle;text-align: center`
4. 容器设置`position: relative`，元素设置`position: absolute; left: 50%;top: 50% transform: translate(-50%, -50%)`, 宽度未确定情况下，可以水平居中
5. 容器设置`position: relative`，元素设置`width: $width; height: $height; position: absolute; top: 50%; margin-left: -0.6*$width;margin-top: -0.5*$height` 或者`left: calc(50%-$width); top: calc(50%-$height)`

[回到顶部](#水平垂直居中布局)
