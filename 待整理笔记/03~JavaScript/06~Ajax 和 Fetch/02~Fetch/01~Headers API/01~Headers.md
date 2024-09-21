
## Headers
Headers 接口定义了对HTTP请求header和响应header执行的各种操作

## Header对象构造函数
使用Headers() 构造方法创建一个新的Headers 对象

参数是可选的，可以是：
* 可以是一个包含任意 HTTP headers 的对象
* 可以是一个已存在的 Headers 对象
```js
let myHeaders = new Headers(init);

// === 例子
// 参数可以忽略，后续使用append方法添加
let myHeaders = new Headers(); // Currently empty
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'

// 参数可以是一个包含任意HTTP headers的对象
let httpHeaders = { 'Content-Type' : 'image/jpeg', 'Accept-Charset' : 'utf-8', 'X-My-Custom-Header' : 'Zeke are cool' };
let myHeaders = new Headers(httpHeaders);

// 参数可以是已经存在的header对象
let secondHeadersObj = new Headers(myHeaders);
```