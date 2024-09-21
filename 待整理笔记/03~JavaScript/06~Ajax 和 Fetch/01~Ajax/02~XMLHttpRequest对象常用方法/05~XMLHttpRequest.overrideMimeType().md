
## XMLHttpRequest.overrideMimeType()
XMLHttpRequest.overrideMimeType() 指定一个MIME类型用于替代服务器指定的类型，使服务端响应信息中传输的数据按照该指定MIME类型处理。此方法必须在send方法之前调用方为有效

如果服务器没有指定一个Content-Type 头, XMLHttpRequest 默认MIME类型为"text/xml"。如果接受的数据不是有效的XML，将会出现格”格式不正确“的错误，通过调用 overrideMimeType() 指定各种类型来避免这种情况

方法需要的参数：
* mimeType：指定一个MIME类型用于替代服务器指定的类型

```js
XMLHttpRequest.overrideMimeType(mimeType)
```