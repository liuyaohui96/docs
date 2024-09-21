
## fetch() 方法
fetch() 方法用于发起获取资源的请求。它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 Response 对象，当遇到网络错误时，fetch() 返回的 promise 会被 reject，并传回 TypeError，成功的 fetch() 检查不仅要包括 promise 被 resolve，还要包括 Response.ok 属性为 true。HTTP 404 状态并不被认为是网络错误

所以，fetch()与jQuery.ajax()有以下不同：
* 当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
* 默认情况下，fetch 不会从服务端发送或接收任何 cookies


fetch()需要的参数与Request对象的构造函数一样:
* 必须的input，可能是
    * 一个 USVString 字符串，包含要获取资源的 URL
    * 一个 Request 对象
* 可选的配置项对象，可选的常用属性参数有：
    * method: 请求使用的方法，如 GET、POST
    * headers: 请求的头信息
    * body: 请求的 body 信息
    * credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项
    * mode: 请求的模式，如 cors、 no-cors 或者 same-origin
    * cache:  请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 
    
一个 Promise，resolve 时回传 Response 对象。

```js
fetch(input[, init])

// === 例子
// 指明想fetch()到的资源路径，然后返回一个包含响应结果的promise
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);
  });

```

