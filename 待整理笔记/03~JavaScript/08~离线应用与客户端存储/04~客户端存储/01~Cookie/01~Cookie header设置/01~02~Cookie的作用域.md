
## Cookie的作用域
`Domain` 和 `Path` 指定定义了cookie的作用域（即cookie在哪个URL被指定）

`Domain`用于指定接受Cookie的主机:
* 如果不指定，则默认为当前`document.location`的主机，排除子域名
* 如果指定了`Domain`, 子域名会被包括。例如，设置了`Domain=mozilla.org`，Cookie会被包括在`developer.mozilla.org`下

`Path` 指定了必须存在的URL路径才能发送`Cookie`头部，例如`Path=/docs`设置了Cookie，则`/docs | /docs/webs | /docs/HTTP` 都能被匹配

```shell
# 指定 cookie 可以送达的主机名。假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>

# 指定一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部
# 如果 path=/docs，那么 "/docs", "/docs/Web/" 或者 "/docs/Web/HTTP" 都满足匹配的条件。
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
```


