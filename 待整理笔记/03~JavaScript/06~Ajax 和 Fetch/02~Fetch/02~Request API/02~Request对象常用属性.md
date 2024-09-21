
## 常用Request对象属性
Request对象的属性都是只读的：
* Request.method：request对象的方法
* Request.url：request对象的请求URL
* Request.headers：包含请求相关的Headers对象
* Request.credentials：包含请求的证书(例如： omit, same-origin)
* Request.cache：包含请求的缓存模式 (例如： default, reload, no-cache).

Request实现了Body, 所以它还具有以下属性可用:
* Request.body
* Request.bodyUsed：判断主体是否已经被用于一个响应中