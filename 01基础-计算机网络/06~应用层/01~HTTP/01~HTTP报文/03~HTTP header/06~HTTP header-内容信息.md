
## 内容信息
1. Content-Type
2. Content-Encoding
3. Content-Language
4. Content-Location

## Content-Type
`Content-Type` 是 Enity header，用于表示资源的MIME类型。
* 响应中，Content-Type标头告诉客户端返回内容的类型。
* 在请求中，客户端告诉服务器实际要发送的类型

> 在通过HTML form提交生成的POST请求中，请求头的Content-Type由<form>元素上的enctype属性指定
```shell
# charset 指令 表示内容的字符编码
Content-Type: text/html; charset=utf-8
# boundary 指令，于封装消息的多个部分的边界
Content-Type: multipart/form-data; boundary=something
```

## Content-Encoding
Content-Encoding 是 Entity header, 表示报文body以何种方式的内容编码转换

> 一般建议对数据尽可能地进行压缩，不过对于特定类型的文件来说，比如jpeg图片文件，已经是进行过压缩的了。有时候再次进行额外的压缩无助于负载体积的减小，反而有可能会使其增大。

```shell
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br
```
服务器端并不强制要求一定使用何种压缩模式。采用哪种压缩方式高度依赖于服务器端的设置，及其所采用的模块

## Content-Language
Content-Language 是 Entity header， 说明访问者希望采用的语言或语言组合，这样的话用户就可以根据自己偏好的语言来定制不同的内容

```html
<!-- 声明文档的书写语言 -->
<html lang="de">

<!-- 为资源指定目标访问者，Content-Language: de, en -->
Content-Language: de, en
```

## Content-Location
Content-Location 是Entity header，用来指定要访问的资源经过内容协商后的结果的URL。

Location 与 Content-Location是不同的，前者（Location ）指定的是一个重定向请求的目的地址（或者新创建的文件的URL），而后者（ Content-Location） 指向的是可供访问的资源的直接地址。Location 对应的是响应，而Content-Location对应的是要返回的实体。

```shell
Content-Location: <url>
```