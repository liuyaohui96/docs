
## 其他高级input控件
* 提交和重置
* button
* 文件(HTML4.1)
* 图像(HTML4.1)
* 隐藏(HTML4.1)

* 数字
* 范围滑块
* 日期时间选择
* 拾色器

## 提交和重置
```html
<input type="submit">
<input type="submit">
```

## button
```html
<input type="button">
```

## 文件
```html
<!-- 文件控件 -->
<input type="file">
```

## 图像
```html
<!-- 
图像按钮控件是一个与<img>元素完全相同的元素，除了当用户点击它时，
它的行为就像一个提交按钮,如果使用图像按钮来提交表单，
这个小部件不会提交它的值；
相反，提交的是在图像上单击处的X和Y坐标(坐标是相对于图像的，
这意味着图像的左上角表示坐标0，0) 
-->
<input type="image" src="foo.jpg">
```

## 隐藏
```html
<!-- 隐藏控件 -->
<!-- 有时候，由于为了方便技术原因，有些数据是用表单发送的，但不显示给用户 -->
<input type="hidden">
```

## number
```html
<!-- 
min & max 约束值
step 增加和减少按钮修改步进值大小
 -->
<input type="number" name="age" id="age" min="1" max="10" step="2">
```

## 范围滑块
```html
<!-- 
min & max 约束值
step 增加和减少按钮修改步进值大小 
-->
<input type="range" name="beans" id="beans" min="0" max="500" step="10">
```

## 日期时间选择器
```html
<!-- 时间 -->
<input type="time" name="time" id="time">
<!-- 星期 -->
<input type="time" name="time" id="time">
<!-- 月 -->
<input type="month" name="month" id="month">
```

## 拾色器
```html
<input type="color" name="color" id="color">
```


