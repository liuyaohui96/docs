
## 使用Service worker 基本步骤
1. `ServiceWorkerContainer.register(scriptURL[, options])` 来获取和注册
    * 该方法创建或更新一个给定scriptURL的ServiceWorkerRegistration，返回一个 Promise 对象， 值是 ServiceWorkerRegistration

2. 如果注册成功，service worker 就在 ServiceWorkerGlobalScope 环境（这是一个特殊类型的 woker 上下文运行环境，与主运行线程（执行脚本）相独立，同时也没有访问 DOM 的能力）中运行。

3. 运行的 service worker 可以监听处理事件
    * 最先发送给 service worker 的事件是安装事件(在这个事件里可以开始进行填充 IndexDB和缓存站点资源)，当 oninstall 事件的处理程序执行完毕后，可以认为 service worker 安装完成了
    * 下一步是激活。当 service worker 安装完成后，会接收到一个激活事件(activate event)。 onactivate 主要用途是清理先前版本的service worker 脚本中使用的资源
    * 页面重载后， service worker 就可以控制register()成功打开的页面
