
## 设置具有有效期的Cookie
session cookie 是指没有指定`Expires` 和 `Max-Age`指令，当关闭浏览器后，该类型cookie就会被删除，而具有有效期的Cookie则需要指定响应的过期时间。假如二者 （指 `Expires` 和 `Max-Age`） 均存在，那么 `Max-Age` 优先级更高。

```shell
# Expires=<date>  设置cookie 的最长有效时间，形式为符合 HTTP-date 规范的时间戳
# 如果没有设置这个属性，那么表示这是一个会话期 cookie,在客户端被关闭时cookie会被移除
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>

# Max-Age=<non-zero-digit> 设置在 cookie 失效之前需要经过的秒数
# 秒数为 0 或 -1 将会使 cookie 直接过期
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>

# 具有有效期的Cookie
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```
设置的时间和日期是相对于客户端而不是服务器。