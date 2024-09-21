
## HTTP header
HTTP header 在HTTP请求报文和HTTP 响应报文在客户端和服务器之间传递附加信息。

HTTP header 由名称(名称不区分大小写）后跟`:`,`:`后跟具体的值组成

```shell
# HTTP header 族称
<header-name>: <header-value>
```

根据header在不同环境下的使用，header可以分为：
1. general header：在请求报文和响应报文中适用，与body内的数据传输无关
2. request header：关于资源获取的相关信息
3. responsive header：包含响应的相关信息，如响应的位置，响应的服务器信息等
4. Entity header： 资源主体的相关header，如内容长度或MIME 类型等

按照具体用途可以分为：
1. HTTP认证
2. HTTP缓存。（见HTTP缓存，主要是强缓存`parama | Expires | Cache-control`，协商缓存`Last-Modified | If-Modified-none | if-Unmodified-none`, `Etag | if-None-Match | If-Match`, 还有`Vary`头部)
3. HTTP 连接管理。(见HTTP连接，主要是`Connection | keep-alive`)
4. 内容协商
5. Cookie（见客户端存储的Cookie部分）
6. CORS（见跨域部分的CROS）
7. 报文body
8. 重定向。Location
9. 请求环境
10. 响应环境
11. 范围
12. 安全
13. 其他