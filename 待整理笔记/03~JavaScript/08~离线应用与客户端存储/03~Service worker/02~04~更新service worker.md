
## 更新service worker
如果service worker 已经被安装，但是刷新页面时有一个新版本的可用，新版的 service worker 会在后台安装，但是还没激活。当不再有任何已加载的页面在使用旧版的 service worker 的时候，新版本才会激活

```js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        
        …

        // include other new resources for the new version...
      ]);
    })
  );
});
```
当安装发生的时候，前一个版本依然在响应请求，新的版本正在后台安装，我们调用了一个新的缓存 v2，所以前一个 v1 版本的缓存不会被扰乱。当没有页面在使用当前的版本的时候，这个新的 service worker 就会激活并开始响应请求