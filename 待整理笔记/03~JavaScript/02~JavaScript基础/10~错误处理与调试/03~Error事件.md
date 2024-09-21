
## Error事件
只要发生了错误，无论是否是浏览器，都会触发error事件

```js
// error事件处理程序 避免浏览器报告错误的最后一道防线
// 三个参数: message, url , line
window.onerror = function(message, url, line){
    // ...
}

// 图像的src属性终端url不能返回被识别的图像格式也能触发error事件
let image = new Image();
image.addEventListener('error', function(){
    // ...
})
```