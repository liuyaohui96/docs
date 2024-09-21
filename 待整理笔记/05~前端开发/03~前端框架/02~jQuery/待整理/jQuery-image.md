# 交换图像

```JavaScript
// 直接设置
$('selecotr').attr('src', 'path');

// hover()事件驱动
let oldSrc=$('selecor').attr('src');
let newImage=new Image();
newImage.attr('src', 'path');
let imgExt=/(\.\w{3,4}$)/; // 紧随三到四个字母
newImage.src=oldSrc.replace(imgExt, '_h$1'); // 将原src变为..._h.jpg
$('selector').hover{
    function(){
        $(this).attr('src', newImage.src);
    },
    function(){
        $(this).attr('src', oldSrc);
    }
}
```

## gallery
```JavaScript
/* 1. 获取旧图像对象
 * 2. 创建显示区域的新图像
 * 3. 隐藏并淡入新图像
 * 4. 淡出并删除旧图像
 */

```