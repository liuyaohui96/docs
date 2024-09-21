
## 注册service worker
```js
// 注册之前确保 service worker 是支持的
if ('serviceWorker' in navigator) {
  // ServiceWorkerContainer.register() 函数来注册 站点的 service worker，
  // service worker 只是一个驻留在我们的 app 内的一个  JavaScript 文件

  //  scope 参数是选填的，可以被用来指定你想让 service worker 控制的内容的子目录。 
  // 在这个例子例，指定了 '/sw-test/'，表示 app 的 origin 下的所有内容。
  // 如果你留空的话，默认值也是这个值， 我们在指定只是作为例子
  navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {
    // 注册成功
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // 注册失败
    console.log('Registration failed with ' + error);
  });
}
```
这就注册了一个 service worker，它工作在 worker context，所以没有访问 DOM 的权限。需要小心 service worker 脚本里的全局变量： 每个页面不会有自己独有的worker。


## 为什么 service worker 注册失败了？
1. 没有在 HTTPS 下运行你的程序
2. service worker文件的地址没有写对，需要相对于 origin , 而不是 app 的根目录。假如service worker 是在 https://mdn.github.io/sw-test/sw.js，app 的根目录是 https://mdn.github.io/sw-test/。应该写成 /sw-test/sw.js 而非 /sw.js
