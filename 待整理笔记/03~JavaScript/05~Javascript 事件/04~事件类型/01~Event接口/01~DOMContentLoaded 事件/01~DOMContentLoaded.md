
## DOMContentLoaded
window 的 load 事件会在页面中的一切都加载完毕时触发，但这个过程可能会因为要加载的外部资源过多而颇费周折。而 DOMContentLoaded 事件则在形成完整的 DOM 树之后就会触发，不理会图像、JavaScript 文件、CSS 文件或其他资源是否已经下载完毕。

要处理 DOMContentLoaded 事件，可以为 document 或 window 添加相应的事件处理程序（尽管这个事件会冒泡到 window，但它的目标实际上是 document）。

```js
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```


解析DOM结构时
1. 如果遇到普通的外链的js，会停止DOM构建。
2. 遇到外链css，不影响后面的 DOM 构建，会阻碍渲染，即外链 css 加载完之前，页面还是白屏
在 html文档加载完毕，并且 html 所引用的内联 js、以及外链 js 的同步代码都执行完毕后触发DOMContentLoaded 事件。html 文档中的图片资源，js 代码中有异步加载的 css、js 、图片资源都加载完毕之后，load 事件触发


* 在载入所有信息之后，触发window.onload
* window.onDocmentReady 在加载DOM之后执行，比window.onload先触发




## load 与 DOMContentLoaded的区别：
1. load: 页面的html、css、js、图片等资源都已经加载完之后才会触发 load 事件
2. DOMContentLoaded: HTML下载、解析完毕之后就触发

