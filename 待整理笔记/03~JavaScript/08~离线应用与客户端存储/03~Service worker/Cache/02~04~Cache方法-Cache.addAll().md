
## Cache方法-Cache.addAll()
Cache.addAll()接受一个URL数组，检索它们，并将生成的response对象添加到给定的缓存中
```js
// requests 是要获取并添加到缓存的字符串URL数组。
cache.addAll(requests[]).then(function() {
  //requests have been added to the cache
});

// === 例子
// 等待一个 InstallEvent 事件触发，然后运行 waitUntil 来处理该应用程序的安装进程。 

this.addEventListener('install', function(event) {
  event.waitUntil(
    // 调用 CacheStorage.open 创建一个新的cache，然后使用 addAll() 添加一系列资源。
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
