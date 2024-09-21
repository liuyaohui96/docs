
## Cache方法-Cache.add()
Cache.add() 接受一个URL作为参数，将返回的response对象添加到给定的cache中

```js
// request是要添加到cache的request。它可以是一个 Request 对象，也可以是 URL
cache.add(request).then(function() {
  //request has been added to the cache
});

// === 例子
this.addEventListener('install', function(event) {
  // 等待 InstallEvent 事件触发， 然后运行 waitUntil 来处理该应用程序的安装过程。
  event.waitUntil(
    // 调用 CacheStorage.open 来创建一个新的缓存，然后使用 Cache.add 来添加一个请求资源到该缓存。
    caches.open('v1').then(function(cache) {
      return cache.add('/sw-test/index.html');
    })
  );
});
```


add() 方法在功能上等同于以下代码
```js
// 对于更复杂的操作，您可以直接使用Cache.put()这个API
fetch(url).then(function (response) {
  if (!response.ok) {
    throw new TypeError('bad response status');
  }
  return cache.put(url, response);
})
```