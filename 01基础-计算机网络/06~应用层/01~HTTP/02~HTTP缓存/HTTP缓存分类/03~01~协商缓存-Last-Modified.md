
## 协商缓存
强缓存判断是否缓存的依据来自于是否超出某个时间或者某个时间段，而不关心服务器端文件是否已经更新，这可能会导致加载文件不是服务器端最新的内容，获知服务器端内容是否已经发生了更新们需要用到协商缓存策略

## Last-Modified
Last-Modified 属于response header,表示资源最后一次更新的时间；通常用于验证接收或存储的资源是否相同，精确度比Etag低，因此是一个备用机制。


`If-Modified-Since | If-Unmodified-Since` 头部会使用到这个字段；浏览器下一次发送请求资源时发送`If-Modified-Since`字段，服务器用本地Last-modified时间与`If-Modified-Since`时间比较，如果本地Last-modified时间在`If-Modified-Since`设置的时间之后，则认为缓存已过期并返回新资源给浏览器；如果时间一致则发送304状态码，让浏览器继续使用缓存。

```shell
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

# 例子
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT 
```

Last-Modified存在一些弊端：
* 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源
* 因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源

## If-Modified-Since
If-Moified-Since 是request header；请求资源在给定的时间日期之后对内容进行修改的情况下才将资源返回，状态码为200；如果请求的资源未经修改，则返回一个不带主体的响应，状态码为304

不同于  If-Unmodified-Since, If-Modified-Since 只可以用在 GET 或 HEAD 请求中。

当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉，除非服务器不支持 If-None-Match
```shell
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
# 例子
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT 
```

## If-Unmodified-Since 
If-Unmodified-Since 是request header，只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源，如果所请求的资源在指定的时间之后发生了修改，那么会返回 412 (Precondition Failed) 错误
```shell
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
# 例子
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT 
```





