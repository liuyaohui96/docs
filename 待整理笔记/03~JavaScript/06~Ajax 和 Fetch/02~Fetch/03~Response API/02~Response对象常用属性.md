
## Response对象常用属性
Response对象属性都是只读的
* Response.headers 包含此 Response 所关联的 Headers 对象。
* Response.ok  包含了一个布尔值，标示该 Response 成功（HTTP 状态码的范围在 200-299）
* Response.redirected  表示该 Response 是否来自一个重定向，如果是的话，它的 URL 列表将会有多个条目
* Response.status 包含 Response 的状态码 （例如 200 表示成功）
* Response.statusText 包含了与该 Response 状态码一致的状态信息（例如，OK对应 200）
* Response.type 包含 Response 的类型（例如，basic、cors）。
* Response.url 包含 Response 的URL

Response 实现了 Body 接口，所以以下属性亦可用
* Response.body 一个简单的 getter，用于暴露一个 ReadableStream 类型的 body 内容
* Body.bodyUsed 包含了一个布尔值来标示该 Response 是否读取过 Body