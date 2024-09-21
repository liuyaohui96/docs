
## 请求范围
1. Range
2. Accept-Ranges（response header）
3. If-Range
4. Content-Range（response header）

## Range
Range 是request header，告知服务器返回文件的哪一部分，在一个  Range 首部中，可以一次性请求多个部分，服务器会以 multipart 文件的形式将其返回

* 如果服务器返回的是范围响应，需要使用 206 Partial Content 状态码
* 假如所请求的范围不合法，那么服务器会返回  416 Range Not Satisfiable 状态码
* 服务器允许忽略  Range  首部，从而返回整个文件，状态码用 200

```shell
Range: <unit>=<range-start>-<range-end>...

# 例子
Range: bytes=200-1000, 2000-6576, 19000- 
```

## Accept Range
Accept Range 是 response header，表示支持范围哦请求，具体的值是用于定义range的单位

```shell
Accept-Ranges: bytes
```

## If-Range
If-Range 是reqeust header，用来使得 Range 头字段在一定条件下起作用，当字段值中的条件得到满足时，Range 头字段才会起作用，同时服务器回复206 部分内容状态码以及Range 头字段请求的相应部分，如果字段值中的条件没有得到满足，服务器将会返回 200 OK 状态码，并返回完整的请求资源。

字段值中既可以用 Last-Modified 时间值用作验证，也可以用ETag标记作为验证，但不能将两者同时使用。

If-Range 头字段通常用于断点续传的下载过程中，用来自从上次中断后，确保下载的资源没有发生改变。

```shell
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Content-Range
Content-Range 是 response header，显示的是一个数据片段在整个文件中的位置
```shell
# <unit> 数据区间所采用的单位。通常是字节（byte）。 
# <size> 整个文件的大小（如果大小未知则用"*"表示）
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>

# 例子
Content-Range: bytes 200-1000/67589 
```