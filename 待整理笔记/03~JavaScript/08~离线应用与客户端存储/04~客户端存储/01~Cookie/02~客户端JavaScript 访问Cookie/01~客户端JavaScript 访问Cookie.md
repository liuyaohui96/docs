## 使用 Cookie

```js
// 设置了一个name为foo，值为bar的cookie
// 默认情况下，cookie只会在当前会话期有效
document.cookie = 'foo=bar';

// value必须符合URI编码规则
document.cookie = 'name=' + encodeURIComponent('liu yaohui');

// 分号后可以追加元数据
// 追加一个过期时间
// 追加只对一个子域名有效
document.cookie = 'name=foo; expires=Fri, 31 Dec 9999 23:59:59 GMT;domian=app.foo.com'
// expires = Fri, 31 Dec 9999 23:59:59 GMT

// ==========
Http/1.1 200 OK
Set-Cookie: name=value;domain=.wrox.com;path=/;secure;
/*
只有指定的wrox.com的子域下以及path参数对应了，以及在SSL连接上才能发送cookie
*/
```

## 子 cookie

```js
// 浏览器有单域名下的cookie数量的限制，可以使用子cookie(subcokkie)
// 子cookie是存放在单个cookie下的更小段的数据
name=name1=value1&name2=value2...
```

## 读取 cookie

```js
documment.cookie; // 获取cookie
```

## 删除 cookie

```js
// 设置为过去的时间即可
document.cookie = 'name=foo;expires=Thu, 01 Jan 1970 00:00:00 GMT';
```

## 封装 cookie 库

```js
// getItem

// setItem

// removeItem

// hasItem

// keys 返回所有cookie名称
```
