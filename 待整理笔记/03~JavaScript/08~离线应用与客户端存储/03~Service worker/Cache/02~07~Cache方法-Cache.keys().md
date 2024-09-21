
## Cache方法-Cache.keys()
Cache.keys() 方法返回返回一个解析为 Cache 键数组的 Promise。请求将以它们被插入的顺序返回

```js
cache.keys(request,{options}).then(function(keys) {
  //do something with your array of requests
});

// === 例子
caches.open('v1').then(function(cache) {
  cache.keys().then(function(keys) {
    keys.forEach(function(request, index, array) {
      cache.delete(request);
    });
  });
})
```