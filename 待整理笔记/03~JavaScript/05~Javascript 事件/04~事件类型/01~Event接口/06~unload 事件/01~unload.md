
## unload
当文档或一个子资源正在被卸载时, 触发 unload事件

unload 事件在下面两个事件后被处罚
* upload 
* pagehide事件

文档会处于一个特定状态：
* 所有资源仍存在 (图片, iframe 等.)
* 对于终端用户所有资源均不可见
* 界面交互无效 (window.open, alert, confirm 等.)
* 错误不会停止卸载文档的过程
```js

```