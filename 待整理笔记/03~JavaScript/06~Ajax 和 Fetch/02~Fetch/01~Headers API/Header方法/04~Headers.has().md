
## Headers.has()
Headers 接口的 has()方法返回一个布尔值来声明一个 Headers对象 是否包含特定的头信息.

```js
myHeaders.has(name);

// === 例子
let myHeaders = new Headers(); // Currently empty
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.has('Content-Type'); // Returns true
myHeaders.has('Accept-Encoding'); // Returns false
```