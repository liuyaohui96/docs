
## Fetch
Fetch API是最近引入的XHR的一个现代替代品，它使异步HTTP请求在JavaScript中更容易实现

Fetch 与 ajax 对比：
* 语法更加简洁，更加具有语义化
* 基于标准 Promise 实现，支持 async/await

## Fetch API
Fetch API 包括：
1. fetch():Fetch API 提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。
2. Headers：response/request 的头信息
3. Request：请求
4. Response：响应

```js
// 简单Ajax例子
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';

request.onload = function() {
  poemDisplay.textContent = request.response;
};

request.send();

// === 替换为Fetch
fetch(url)
  .then(response => response.text())
  .then(text => {
    poemDisplay.textContent = text;
  });
