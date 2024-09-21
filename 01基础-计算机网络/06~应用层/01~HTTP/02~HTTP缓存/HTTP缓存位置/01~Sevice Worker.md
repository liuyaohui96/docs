
## Service Worker
Service Worker 是运行在浏览器背后的独立线程。使用 Service Worker，传输协议必须为 HTTPS（因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全）。。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的

Service Worker 实现缓存功能一般分为三个步骤：
1. 先注册 Service Worke
2. 监听到 install 事件以后就可以缓存需要的文件
3. 下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。当 Service Worker 没有命中缓存的时候，我们需要去调用 fetch 函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。但是不管我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容