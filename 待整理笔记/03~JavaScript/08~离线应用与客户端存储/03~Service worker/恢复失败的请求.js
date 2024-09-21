this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function() {
        // fetch(event.request) 返回了默认的网络请求，它返回了一个 promise
        // 当网络请求的 promise 成功的时候，
        // 通过执行一个函数用 caches.open('v1') 来抓取我们的缓存，它也返回了一个 promise
        // 当这个 promise 成功的时候， cache.put() 被用来把这些资源加入缓存中
        return fetch(event.request).then(function(response) {
          return caches.open('v1').then(function(cache) {
            // 资源是从  event.request 抓取的，它的响应会被  response.clone() 克隆一份然后被加入缓存
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
      // 当请求没有匹配到缓存中的任何资源的时候，以及网络不可用的时候，请求依然会失败
      // 提供一个默认的回退方案以便不管发生了什么，用户至少能得到些东西：
      .catch(function() {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      })
  );
});
