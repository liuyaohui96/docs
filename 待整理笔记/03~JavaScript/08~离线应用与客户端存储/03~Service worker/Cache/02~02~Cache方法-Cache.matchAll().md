
## Cache方法-Cache.matchAll()
Cache 接口的 match() 方法, 返回一个 Promise 对象，该对象解析为Cache 对象中匹配请求的 Response 对象数组，如果没有匹配到，则解析到 undefined 。

```js
cache.matchAll(request,{options}).then(function(response) {
  //do something with the response array
});

// === 例子
caches.open('v1').then(function(cache) {
  cache.matchAll('/images/').then(function(response) {
    response.forEach(function(element, index, array) {
      cache.delete(element);
    });
  });
})
```