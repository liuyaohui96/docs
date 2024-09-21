
## location方法-跳转方法
1. location.assign() 
2. location.replace()
```js
// === 加载新的url, 不会移除历史URL，可以回退
location.assign(URL)

// === 跳转到新的URL，旧的URL被移除，可以回退
location.replace(newURL)

// 当值为 true 时，将强制浏览器从服务器加载页面资源，
// 当值为 false 或者未传参时，浏览器则可能从缓存中读取页面
// 默认为false
location.reload(forceGet)
```

## location方法-重载方法
```js
// 当值为 true 时，将强制浏览器从服务器加载页面资源，
// 当值为 false 或者未传参时，浏览器则可能从缓存中读取页面
// 默认为false
location.reload(forceGet)
```

## location方法-获得URL
`Location.toString()`返回一个USVString表示整个URL，相当于`Location.href`的只读属性版本