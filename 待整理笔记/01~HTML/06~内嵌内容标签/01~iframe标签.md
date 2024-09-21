

## iframe标签
iframe标签用于在一个页面内嵌入其他页面

常用属性：
* src：指定iframe的路劲。为了提高速度，在主内容完成加载后，使用JavaScript设置iframe的src属性是个好主意。这使您的页面可以更快地被使用，并减少您的官方页面加载时间
* width & height：设置宽度和高度
* allowfullscreen 允许通过javascript实现全屏显示iframe
* seamless 应用程序不希望出现滚动条
* title:  title 属性来标识框架的主要内容，这样可以极大方便使用辅助技术（例如屏幕阅读器）浏览网页的人
* sandbox: 沙盒。未沙盒化(Unsandboxed)内容可以做得太多（执行JavaScript，提交表单，弹出窗口等）默认情况下，您应该使用没有参数的sandbox属性来强制执行所有可用的限制。如果绝对需要，您可以逐个添加权限（sandbox=""属性值内）
```html
<iframe src="https://www.example.com">
  Fallback text for non-supported browsers
</iframe>

<iframe title="Wikipedia page for Avocados" src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

## 脚本访问
1. iframe对象包含在`window.iframes`中
2. 框架内部，脚本可以通过 window.parent 引用父窗口对象
3. 脚本访问框架内容必须遵守同源策略，并且无法访问非同源的 window 对象的几乎所有属性，跨域通信可以通过 window.postMessage 来实现。


## iframe 的安全隐患
黑客恶意修改网页时常把iframe作为共同的攻击目标。如单击劫持是一种常见的iframe攻击，黑客将隐藏的iframe嵌入到您的文档中（或将您的文档嵌入到他们自己的恶意网站），并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。

建议：
1. 只要在必要时使用iframe嵌入，嵌入第三方内容（例如YouTube视频和地图）是有意义的，除了安全问题，你还应该意识到知识产权问题。无论在线内容还是离线内容，绝大部分内容都是有版权的。
2. 使用HTTPS
  * HTTPS减少了远程内容在传输过程中被篡改的机会
  * HTTPS防止嵌入式内容访问您的父文档中的内容，反之亦然
3. 始终使用sandbox属性
4. 配置CSP指令：CSP代表内容安全策略，它提供一组HTTP header（由web服务器发送时与元数据一起发送的元数据），旨在提高HTML文档的安全性

## iframe缺点
1. 阻塞主页面的onload事件
2. 搜索引擎无法解读这种页面，不利于SEO
3. iframe 和页面共享连接池，而浏览器对相同区域有限制，所以会影响性能