
## Cache方法-Cache.put()
Cache 接口的  put() 方法 允许将键/值对添加到当前的 Cache 对象中

只想 fetch() 一个或多个请求，然后直接添加结果到cache中，这种情况下，最好使用 Cache.add()/Cache.addAll()，因为它们是一个或者多个这些操作的便捷方法

```js
cache.put(request, response).then(function() {
  // request/response pair has been added to the cache
});

// === 例子
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('Bad response status');
  }
  return cache.put(url, response);
})
```