
## Vary
Vary 是response header，用于决定将来的请求如何匹配请求headers，从而决定使用缓存的响应，还是向服务器发起新的请求。当服务器收到一个请求，只有当前的请求和缓存的响应头里的Vary都匹配，才能使用缓存。

响应状态码为 304 Not Modified  的响应中，也要设置 Vary 首部，而且要与相应的 200 OK 响应设置得一模一样。


使用vary头有利于内容服务的动态多样性。内容协商算法中，服务器用Vary用于指示选取资源代表的时候应该使用哪些headers。例如使用Vary: User-Agent头，缓存服务器需要通过UA判断是否使用缓存的页面。如果需要区分移动端和桌面端的展示内容，利用这种方式就能避免在不同的终端展示错误的布局。


```shell
# 所有的请求都被视为唯一并且非缓存的
# 使用Cache-Control: private,来实现则更适
Vary: *
Vary: <header-name>, <header-name>, ...

# 例子
# 对于User-Agent 头部信息，例如你提供给移动端的内容是不同的，可用防止你客户端误使用了用于桌面端的缓存
# 因为移动版和桌面的客户端的请求头中的User-Agent不同，
# 缓存服务器不会错误地把移动端的内容输出到桌面端到用户
Vary: User-Agent
Vary: User-Agent
```