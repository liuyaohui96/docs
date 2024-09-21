# Achor

```JavaScript
// 获取链接href属性
let href=$('selector').attr('href');

// 点击不要打开链接
//方法1
$('selector').click(function(){
    // ...
    return false;
})
// 方法2
$('selector').click(function(event){
    // ...
    event.preventDefault();
})

```

```JavaScript
// 其他网站页面根据新窗口打开，本网站绝对路径的页面不通过新窗口打开
// location.protocol 返回 http 或 https
// location.hostname 返回主机，如 www.yourhost.com
let mySite=location.protocol+'//'+location.hostname; 
$('a[href^="http://"], a[href^="https://"]').not('a[href^="'+mySite+'"]').attr('target', '_blank');

```

## open创建新窗口
```JavaScript
open(URl, name, properties);

// e.g
let newWin=open('https://github', 'newWin', 'width: 200px;height: 200px');

// 关闭窗口
newWin.close();
// 失去焦点
newWin.blur();
// 聚焦
newWin.focus();
// 向右或者向下移动窗口
newWin.moveBy(number, number);
// 指定一个向左值和向上值
newWin.moveTo(number, number);

newWin.resizeBy(number, number); // 增加窗口宽度和高度
newWin.rezizeTo(number, number); // 设置新一组窗口宽度和高度

newWin.scrollBy(number, number); // 向右或向下滚动
nweWin.scrollTo(number, number); // 距离顶部和左边界的位置
```
| 窗口属性   | 描述                  |
| ---------- | --------------------- |
| width      | 宽度                  |
| height     | 高度                  |
| left       | 屏幕左边界            |
| top        | 屏幕上边界            |
| scrollbars | 滚动条                |
| status     | 窗口底部状态栏         |
| toolbar    | 包含导航按钮           |
| location   | 地址栏,如设置是否可见  |