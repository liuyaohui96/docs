
## Cache方法-Cache.delete()
Cache.delete() 查询request为key的 Cache 条目，如果找到，则删除该 Cache 条目并返回resolve为true的 Promise 。 如果没有找到，则返回resolve为false的 Promise 。

```js
cache.delete(request,{options}).then(function(true) {
  //your cache entry has been deleted
});

// === 例子
caches.open('v1').then(function(cache) {
  cache.delete('/images/image.png').then(function(response) {
    someUIUpdateFunction();
  });
})
```