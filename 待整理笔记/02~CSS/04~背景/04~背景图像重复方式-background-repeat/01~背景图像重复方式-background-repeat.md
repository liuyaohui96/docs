
## 背景图像重复方式-background-repeat
background-repeat 属性定义背景图像的重复方式.它的值可能是：

* repeat：图像会按需重复来覆盖整个背景图片所在的区域. 如果大小不合适，最后一个图像会被裁剪
* no-repeat: 图像不会被重复
* space: 图像会尽可能得重复, 但是不会裁剪. 第一个和最后一个图像会被固定在元素(element)的相应的边上, 同时空白会均匀地分布在图像之间
* round: 缩放。随着允许的空间在尺寸上的增长,重复的图像将会伸展,直到有足够的空间来添加一个图像. 当下一个图像被添加后, 所有的当前的图像会被压缩来腾出空间

```css
background-repeat: repeat-x | repeat-y | [ repeat | space | round | no-repeat

/* ===  例子 */
background-repeat: repeat; 
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: no-repeat;
```