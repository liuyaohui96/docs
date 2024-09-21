
## HTTP0.9
HTTP1.0 之前的HTTP初始版本没有版本号，后来，为了区别开来，把HTTP1.0之前的版本称为HTTP/.9

HTTP0.9的组成非常简单：
* 请求报文组成
    *  请求由一行组成
    * 请求方法只有Get，请求方法后根资源的路径（不是URL，因为连接到服务器后就不需要protocol，server，port）
    * 没有请求头部。这意味着只能传输HTML文件，而不能传输其他类型的文档。
* 响应报文。没有status code，出现问题时，会发送回一个特定的HTML文件，其中包含问题的描述

```shell
# 请求
GET /mypage.html

# 响应直接返回文件
<HTML>
A very simple HTML page
</HTML>
```