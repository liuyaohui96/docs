
## HTTP1.1
HTTP1.1 是HTTP的第一个标准化版本，1997正式发布

HTTP1.1的改进：
* 可以重用连接（即可以使用长连接）。节省了显示文档的嵌入资源需要的重新打开连接的时间。HTTP1.0默认使用的是短连接。HTTP1.1默认使用长连接（即持久连接）：
    * http 1.0中长连接默认是关闭的，需要在http头加入`Connection: Keep-Alive`，才能启用Keep-Alive
    * http 1.1中默认启用Keep-Alive，在http头加入`Connection: close`才关闭长连接
* 增加了Pipelining（管线化），允许在完全传输完成第一个请求前发送第二个请求，从而降低了通信延迟
* 支持Chunked response（分块响应）
* HTTP1.0 使用 `Expires, If-Modified-Since`等判断缓存，HTTP1.1增加更多可供选择的缓存头来控制缓存。
* 内容协商，包括language，encoding，type被引入
* Host 头部能够在同一IP地址上托管不同的域，从而允许服务器托管
* 协议扩展切换，允许应用HTTP协议升级机制
* HTTP1.1新增错误通知处理状态码

```shell
# === 例子
# 请求
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

# 响应
200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)
```