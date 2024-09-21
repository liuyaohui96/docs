
## Response
Response 接口表示请求响应


## Response()构造函数创建对象
接受的参数是：
* 可选的body，可能是以下其中一个
    * Blob
    * BufferSource
    * FormData
    * URLSearchParams
    * USVString
* 可选的init对象，可能包括的参数是
    * status: response的状态码, 例如:200.
    * statusText: 和状态码关联的状态消息, 例如: OK.
    * headers:你想加到response上的任何headers, 包含了一个 Headers 对象或满足对象语法的 ByteString key/value 对 (详见 HTTP headers).
```js
let myResponse = new Response(body, init);

// === 例子
let myBlob = new Blob();
let init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
let myResponse = new Response(myBlob,init);
```
