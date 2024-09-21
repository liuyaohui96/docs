
## URI编码方法
1. encodeURI()
2. decodeURI()
3. encodeURIComponent()
4. decodeURIComponent()

## encodeURI
encodeURI 自身无法产生能适用于HTTP GET 或 POST 请求的URI，例如对于 XMLHTTPRequests, 因为 "&", "+", 和 "=" 不会被编码，然而在 GET 和 POST 请求中它们是特殊字符
```js
encodeURI(URI)
```

## decodeURI
```js
decodeURI(encodedURI)
```

## encodeURIComponent()
encodeURIComponent 转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符
```js
encodeURIComponent(str);
```

## decodeURIComponent
```js
decodeURIComponent(encodedURI)
```