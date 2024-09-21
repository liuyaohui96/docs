
## fetch()发送带凭据的请求
为了让浏览器发送包含凭据的请求（即使是跨域源），要将credentials: 'include'添加到传递给 fetch()方法的init对象。
```js
fetch('https://example.com', {
  credentials: 'include'  
})
```

如果你只想在请求URL与调用脚本位于同一起源处时发送凭据，请添加credentials: 'same-origin'。
```js
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'  
})  
```

要改为确保浏览器不在请求中包含凭据，请使用credentials: 'omit'
```js
fetch('https://example.com', {
  credentials: 'omit'  
})
```