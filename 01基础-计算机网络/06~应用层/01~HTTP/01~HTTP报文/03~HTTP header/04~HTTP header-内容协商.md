
## 内容协商
1. Accept
2. Accept-charset
3. Accept-Encoding
4. Accept-Language

## Accept
Accept 是request header， 表示客户端可以理解的MIME类型。通过内容协商，服务器其中的一种类型，将其作为响应中`Content-Type` header 的内容
```shell
# Default for navigation requests
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8

# */* 表示Any MIME type
Accept: */*
```

## Accept-Charset
Acceipt 是request header，表示客户端可以理解的字符编码。通过内容协商，服务器将其中其中的一种字符编码作为响应中`Content-Typpe` 的内容（用于其中的`charset=`参数）

目前每一种内容类型都有自己的默认字符集。浏览器通常不会设置此项值，因为每种内容类型的默认值通常都是正确的，但是发送它会更有利于识别。
```shell
Accept-Charset: <charset>

# Multiple types, q 表示权重，代表优先顺序
Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

## Accept-Encoding
Accept-Encoding 是reqeust header 表示客户端能够理解的内容编码方式（通常是某种压缩算法）。通过内容协商，服务器选择其中一种内容编码方式，并作为响应中`Content-Encoding`header 的内容

```shell
Accept-Encoding: gzip, compress, br
```

## Accept-Language
Accept-Language 是request header，表四客户端可以理解的自然语言。通过内容协商，服务器选择其中的一种语言作为响应中`Content-Language`header的内容

浏览器会基于其用户界面语言为这个请求头设置合适的值，即便是用户可以进行修改，但是这种情况极少发生

```shell
Accept-Language: <language>
Accept-Language: *

# Multiple types, q 表示权重，代表优先顺序
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```