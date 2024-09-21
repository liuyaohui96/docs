
## Request
Request 接口表示资源请求

## Request对象构造方法
构造方法需要的参数：
* 必须的input对象。可以是：
    * 包含fetch资源的URL的USVString
    * 一个Request对象
* 可选的init对象，可能包括以下常用的自定义项
    * method: 请求使用的方法，如 GET、POST
    * headers: 请求的头信息
    * body: 请求的 body 信息
    * credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项
    * mode: 请求的模式，如 cors、 no-cors 或者 same-origin
    * cache:  请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 
```js
let myRequest = new Request(input, init);
```