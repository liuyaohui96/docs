
## 防范
* 对用户输入的特殊字符进行过滤，如`< > ; `等字符进行过滤；对输入的长度进行限制
  * 客户端，使用 textContent 替代 innerHTML，阻止浏览器运行通过 HTML 解析器执行其中的脚本的字符串。
  * 服务端，转义 HTML 标签来阻止浏览器解析用户实际输入的 HTML，因此也不会执行脚本；模板引擎和成熟的渲染框架都自带转义的功能
* 对具有script或者javascript大小写字符的提交内容进行安全检查
* cookie
  * 避免在cookie中存放重要的用户隐私信息
  * HttpOnly Cookie，可以避免该网页的cookie被客户端恶意JavaScript窃取，保护用户cookie信息
* CSP：本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行，只需要配置规则，如何拦截是由浏览器自己实现的，开启CSP的方式：
  * 设置 HTTP Header 中的 Content-Security-Policy(HTTP Header中的安全消息header)


```js
// 特殊字符被转义后，只会被显示在页面上，而不会被解释
function htmlEncode(str){
  if(str.length === 0) reutrn '';
  let s = '';
  s = str.replace(/&/, '&amp;');
  s = str.replace(/</, '&lt;');
  s = str.replace(/>/, '&gt;');
  s = str.replace(/ /, '&nbsp;');
  s = str.replace(/\.'/, '#39');
  s = str.replace(/"/, '&quot;');
  s = str.replace(/\n/, '<br>');
  return s;
}
```

```shell
# === CSP
Content-Security-Policy: default-src 'self' # 只允许加载本站资源
Content-Security-Policy: img-src https://* # 只允许加载 HTTPS 协议图片
Content-Security-Policy: child-src 'none' # 允许加载任何来源框架
```