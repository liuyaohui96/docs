
## 边框图像
```css
/* === backgruond-image-source 指示边框图像的url */
border-image-source: url('/media/examples/border-diamonds.png');
/* === backgorund-image-source 指示剪切边框图像的上右左下四个角 */
/*
下面例子假如背景图像是300px * 240px，
则剪切的图像大小是 60px 90px 30px 60px
其中60px = 25% * 240px， 其他结果，依次类推
*/
border-image-slice: 25% 30% 15% 20%;
/* === border-image-width 指示边框图像的宽度*/
border-image-width: 20px;
/* === border-image-repeat 是处理上右下左四个角之后边框图像的重复形式 */
border-image-repeat: repeat| stretch | round
/* === border-image 是以上边框图像属性的缩写 */
border-image: url('/media/examples/border-diamonds.png') 30;

/* border-image还可以使用渐变定义，渐变详情见背景-background-image中关于渐变的内容 */
border-image: linear-gradient(red, blue) 27 / 35px;
```