
## HTTP1.0
HTTP1.0 在初始版本HTTP0.9的基础上进行扩展：

* 请求报文
    * 每个请求都要发送版本信息（HTTP1.0 将版本信息附加到请求行）
    * 添加HTTP header
    * 允许传输普通HTML文件以外的其他文档的功能(因为HTTP header中的`Content-type`)

* 响应报文
    * 响应开始时还会发送一条状态代码行，以使浏览器本身可以了解请求的成功或失败，并因此调整其行为（例如以特定方式更新或使用其本地缓存）
    * 添加HTTP header

```shell
# === 例子
# 请求
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

# 响应
200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML> 
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>

# 获取图片的请求
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

# 获取图片的响应
200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```