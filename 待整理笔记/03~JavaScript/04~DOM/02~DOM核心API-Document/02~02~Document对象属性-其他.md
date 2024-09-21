

## Document对象属性-其他
1. Document.compatMode
2. Document.contentType
3. Document.characterSet
4. Document.title
5. Documment.domain
6. Document.documentURI & document.URL & document.location & Document.referrer

## Document.compatMode
Document.compatMode属性指示文档是在Quirks mode(怪异模式) 还是在Standards mode（标准模式）下呈现
```js
// "BackCompat" if the document is in quirks mode.
// "CSS1Compat" if the document is in no-quirks (also known as "standards") mode
mode = document.compatMode;

// === 例子
if (document.compatMode == "BackCompat") {
  // in Quirks mode
}
```

## Document.contentType
Document.contentType是只读属性，返回将文档呈现为的MIME类型，这可能来自HTTP header或其他MIME信息源，并且可能会受到浏览器或扩展程序执行的自动类型转换的影响。

注意，此属性不会受到`<meta> `标签的影响

```js
let contentType = document.contentType;
```

## Document.characterSet
只读属性，返回当前渲染文档的字符编码。如果要覆盖指定的字符编码，使用`content-type`header或者类似的元标签`<meta charset="utf-8">`

```js
let string = document.characterSet;

// === 设置文档编码
Content-Type: text/html; charset=UTF-8
// 或者
<meta charset="utf-8">
```

## Document.title
document.title属性获取或设置文档的当前标题
```js
var docTitle = document.title;
document.title = newTitle;
```

## Document.domain
获取/设置当前文档origin的域部分

```js
let domainString = document.domain;
document.domain = domainString;
```
> 浏览器对 domain 属性还有一个限制，即如果域名一开始是“松散的”（loose），那么不能将它再设置为“紧绷的”（tight）。换句话说，在将 document.domain 设置为"wrox.com"之后，就不能再将其设置回"p2p.wrox.com"，否则将会导致错误

## Document.readyState
```js
Document.readyState
```


## Document.documentURI & Document.URL & document.location & Document.referrer
1. Document.documentURI & Document.URL 都返回表示文档location的字符串
2. Document.location 是一个只读属性，返回一个 Location 对象，包含有文档的 URL 相关的信息
3. Document.referrer 返回 跳转或打开到当前页面的 URI。如果用户直接打开了这个页面（不是通过页面跳转，而是通过地址栏或者书签等打开的），则该属性为空字符串。

```js
let string = document.documentURI;

// ===document.location
locationObj = document.location
// // Equivalent to document.location.href = 'http://www.example.com'
document.location = 'http://www.example.com' 

// === document.referrer
let referrer = document.referrer;
```
