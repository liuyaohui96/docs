
## Cache 方法-Cache.match()
Cache 接口的 match() 方法, 返回一个 Promise 对象，该对象解析为第一个匹配请求的 Response 对象，如果没有匹配到，则解析到 undefined 。

```js
cache.match(request,{options}).then(function(response) {
  //操作response
});
```