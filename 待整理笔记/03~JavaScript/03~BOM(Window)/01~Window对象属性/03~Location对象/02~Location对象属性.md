
## Location对象属性
```js
// 以下属性均返回DOMString
// ==== 以 https://www.example.com:80/index.html?foo=bar#test 为例

location.href // https://www.example.com:80/index.html?foo=bar#test
location.protocol // https
location.host // www.example.com:80
location.hostname // www.example.com
location.port // port 端口
location.pathname // 返回路径名称
location.search // ?foo=bar  查询字符串部分
location.hash // #test 锚点部分

location.orgin // https://www.example.com:80 = protocol + host + port
```