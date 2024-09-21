
## 请求上下文
1. From
2. Host
3. Referer
4. User-Agent

## From
From 是reqeust header，表示发送请求的用户代理的实际掌控者的电子邮箱

不可以将 From 首部用于访问控制或者身份验证。
```shell
From: <email>
```

## Host
Host 是reqeust header, 指明了服务器的域名以及（可选的）服务器监听的TCP端口号。

如果没有给定端口号，会自动使用被请求服务的默认端口（比如请求一个HTTP的URL会自动使用80端口）。

HTTP1.1 规定必须包含一个Host header，缺少 Host 头字段或者设置了超过一个的 Host 头字段，一个400（Bad Request）状态码会被返回
```shell
Host: <host>:<port>
```

## Referer
Referer 是request header，表示当前请求页面的来源页面的地址

服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等

Referer 请求头可能暴露用户的浏览历史，涉及到用户的隐私问题。在以下两种情况下，Referer 不会被发送：
* 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI
* 来源页面采用的是安全协议（HTTPS），而当前请求页面采用的是非安全协议

```shell
Referer: <url>
```

##　User-Agent
User-Agent 是 request header， 表示用户代理软件的应用类型、操作系统、软件开发商以及版本号
```shell
# <product> 产品识别码
# <product-version> 产品版本号 
# <comment>零个或多个关于组成产品信息的注释
User-Agent: <product> / <product-version> <comment>
```