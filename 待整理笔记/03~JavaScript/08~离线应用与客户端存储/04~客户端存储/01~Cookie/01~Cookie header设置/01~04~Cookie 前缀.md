
## Cookie前缀
名称中包含 __Secure- 或 __Host- 前缀的 cookie，只可以应用在使用了安全连接（HTTPS）的域中，需要同时设置 secure 指令。假如 cookie 以 __Host- 为前缀，那么 path 属性的值必须为 "/" （表示整个站点），且不能含有 domain 属性

```shell
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

# 缺少 Secure 指令，会被拒绝
Set-Cookie: __Secure-id=1

# 缺少 Path=/ 指令，会被拒绝
Set-Cookie: __Host-id=1; Secure

# 由于设置了 domain 属性，会被拒绝
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```