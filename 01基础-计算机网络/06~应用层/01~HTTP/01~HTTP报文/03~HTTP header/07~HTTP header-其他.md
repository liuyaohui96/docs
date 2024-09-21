

##　其他
1. Authorization
2. WWW-Authenticate(response header)
2. Location（response header）
3. Date(genearl header)

## Authorization
Authorization 是一个request header，包含了服务器用于验证用户代理的凭证（credentials ）

```shell
Authorization: <type> <credentials>
```

## WWW-Authenticate
WWW-Authenticate 是 response header，定义了使用何种验证方式去获取对资源的连接。WWW-Authenticate header通常会和一个 401 Unauthorized 的响应一同被发送

```shell
# <type> 一个通用类型 "Basic"
# realm=<realm> 一个保护区域的描述. 如果未指定realm, 客户端通常显示一个格式化的主机名来替代
WWW-Authenticate: <type> realm=<realm>

# 例子
WWW-Authenticate: Basic
WWW-Authenticate: Basic realm="Access to the staging site"
```

## Location
Location 是 response header， 表示页面重新定向至的地址，一般在响应码为3xx的响应中才会有意义。

除了重定向响应之外， 状态码为 201 (Created) 的消息也会带有Location首部。它指向的是新创建的资源的地址。

Location 与 Content-Location是不同的，前者（Location ）指定的是一个重定向请求的目的地址（或者新创建的文件的URL），而后者（ Content-Location） 指向的是可供访问的资源的直接地址。Location 对应的是响应，而Content-Location对应的是要返回的实体。

```shell
Location: <url>
```

## Date
Date 是general header，表示报文创建的时间
```shell
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```