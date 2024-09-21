
## Responsive对象常用方法
* Response.clone() 创建一个 Response 对象的克隆。
* Response.error() 返回一个绑定了网络错误的新的 Response 对象
* Response.redirect(url, status) status 需要是一个重定向的状态码（如301，302）
    ```js
    responseObj.redirect('https://www.example.com', 302);
    ```

Response 实现了 Body 接口，所以以下方法同样可用：
* Body.arrayBuffer() 接受一个 Response 流, 并等待其读取完成. 它返回一个 promise 实例, 并 resolve 一个 ArrayBuffer 对象
* Body.blob() 使用一个 Response 流，并将其读取完成。它返回一个使用Blob解决的promise。
* Body.formData() 将 Response 对象中的所承载的数据流读取并封装成为一个对象，该方法将返回一个 Promise  对象，该对象将产生一个FormData 对象
* Body.json() 接收一个 Response 流，并将其读取完成。它返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。
* Body.text() 提供了一个可供读取的“返回流”（Response stream），并将它读取完。它返回一个包含 USVString 对象（也就是文本）的 Promise 对象，返回结果的编码永远是 UTF-8