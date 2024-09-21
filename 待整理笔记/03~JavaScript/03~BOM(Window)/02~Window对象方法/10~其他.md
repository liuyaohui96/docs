
## Window对象方法-其他
1. Window.print()
2. Window.requestAnimationFrame 见合作异步JavaScript部分
3. Window.stop()
4. 来自WindowOrWorkerGlobalScope对象的方法

## Window.print()
打开“打印”对话框以打印当前文档

## Window.stop()
在当前浏览上下文中停止进一步的资源加载，等效于浏览器中的“停止”按钮

由于脚本的执行方式，此方法无法中断其父文档的加载，但会停止其图像，新窗口和其他仍在加载的对象

## 来自WindowOrWorkerGlobalScope对象的方法
1. WindowOrWorkerGlobalScope.setInterval() & WindowOrWorkerGlobalScope.setTimeout() & WindowOrWorkerGlobalScope.clearInterval() & WindowOrWorkerGlobalScope.clearTimeout() 见合作异步JavaScript部分

2. WindowOrWorkerGlobalScope.btoa() 从一串二进制数据创建一个以base-64编码的ASCII字符串
3. WindowOrWorkerGlobalScope.atob() 解码已使用base-64编码编码的数据字符串。

4. WindowOrWorkerGlobalScope.fetch() 参考：https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch


```js
// 对经过 base-64 编码的字符串进行解码
window.atob(encodedStr)

// 对字符串进行base64编码
window.btoa(str)
```

