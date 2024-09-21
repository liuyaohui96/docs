
## 安装和激活service worker
service worker 注册之后，浏览器会尝试为你的页面或站点安装并激活它。

install 事件会在安装完成之后触发。install 事件一般是被用来填充浏览器的离线缓存。

需要使用Service Worker 的 新的标志性的存储 API — cache，一个 service worker 上的全局对象，它使我们可以存储网络响应发来的资源，并且根据它们的请求来生成key

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```
1. 新增了一个 install 事件监听器，接着在事件上接了一个ExtendableEvent.waitUntil()  方法——这会确保Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成
2. waitUntil() 内，我们使用了 caches.open() 方法来创建了一个叫做 v1 的新的缓存，将会是我们的站点资源缓存的第一个版本。它返回了一个创建缓存的 promise，当它 resolved的时候，我们接着会调用在创建的缓存示例上的一个方法  addAll()，这个方法的参数是一个由一组相对于 origin 的 URL 组成的数组，这些 URL 就是你想缓存的资源的列表。
3. 如果 promise 被 rejected，安装就会失败，这个 worker 不会做任何事情
4. 当安装成功完成之后， service worker 就会激活


