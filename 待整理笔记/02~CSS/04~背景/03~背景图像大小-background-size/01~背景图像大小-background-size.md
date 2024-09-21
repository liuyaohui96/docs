
## 背景图像大小-background-size
background-size 设置背景图片大小。

属性值可以使
1. `<length>` 指定背景图片大小，不能为负值。
2. `<percentage>` 背景图片相对背景区的百分比
3. auto 以背景图片的比例缩放背景图片
4. cover 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见(cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）)
4. contain 缩放背景图片以完全装入背景区，可能背景区部分空白(为了使图像以完全显示在容器内，如果图像长宽比与容器长宽比不一致，将会出现空隙)

```css
/* 第一个值是图像的宽度，第二个值是图像的高度 */
/* 如果只有一个值，那么高度被默认为auto */
bakcgournd-size: <length> {1,2} | <percentage>{1,2} | auto ]{1,2} | cover | contain

/* === 例子 */
background-size: auto auto; /* default, 保持默人长宽比 */
background-size: 120px 80px;
background-size: contain;
```