
## 预解析DNS
通过 DNS 预解析告诉浏览器未来可能从某个特定的 URL 获取资源，当浏览器真正使用到该域中的某个资源时就可以尽快地完成 DNS 解析

如将来可以example.com 获取图片或音频资源
```
<link rel="dns-prefetch" href="//example.com">
```

后面从该 URL 请求一个资源时，就不再需要等待 DNS 的解析过程，当浏览器真正请求该域中的某个资源时，DNS 的解析就已经完成了,从而节省时间


浏览器会对a标签的href自动启用DNS Prefetching，所以a标签里包含的域名不需要在head中手动设置link。但是在HTTPS下不起作用，需要meta来强制开启功能

```html
<!-- 强制打开a标签域名解析 -->
<meta http-equiv="x-dns-prefetch-control" content="on">
```
这个限制的原因是防止窃听者根据DNS Prefetching推断显示在HTTPS页面中超链接的主机名