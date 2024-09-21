
## JSONP
原理：浏览器同源策略允许跨域资源嵌入（Cross-origin embedding）跨域,所以 `<script>` 标签的 src 属性不会被同源策略所约束, 利用script标签的src属性来实现跨域。

评价：
* 优点：兼容性好   
* 缺点：只支持GET请求；不安全可能会遭受XSS攻击；需要信任 JSONP 数据的提供者

## JSONP的实现步骤
* 将JSONP发起请求封装在函数中
    * 参数为：url，附加在请求中的参数，回调函数
    * 组装参数对象: 将附加在请求中的参数和回调函数放到一个对象上
    * 拆解参数对象为参数字符串数组（`{key} = {value}`形式的字符串项)
    * 创建script标签，script标签的src进行组装
        * 组装url
        * 组装参数字符串数组（`arr.join('&')`）
    * 将script标签添加到body中
    * 全局定义回调函数的属性`window[cb] = function(data)`

* 服务器收到请求后，返回cb(data)
* 运行cb(data)，从而获得跨域得到data，并进行进一步处理

## jQuery的jsonp形式
```js
$.ajax({
  url: 'http://www.example',
  dataType: 'jsonp',
  type: 'get', //可以省略
  jsonpCallback: 'show', // 传递给服务器的函数名，可省略
  jsonp: 'callback', // 传递函数名的形参callback，可省略
  success: function(data) {
    console.log(data);
  }
});
```


