
## Cache
Cache 接口为缓存的 Request / Response  对象对提供存储机制。尽管它被定义在 service worker 的标准中,  但是它不必一定要配合 service worker 使用。

除非明确地更新缓存，否则缓存将不会被更新；除非删除，否则缓存数据不会过期。