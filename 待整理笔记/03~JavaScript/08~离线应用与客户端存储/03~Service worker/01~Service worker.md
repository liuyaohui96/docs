
## Service workder
Application Cache，但是它假定使用时会遵循诸多规则，如果你不严格遵循这些规则，它会把你的APP搞得一团糟。虽然 Service Worker 的语法比 AppCache 更加复杂，但是你可以使用 JavaScript 更加精细地控制 AppCache 的静默行为。

Service Worker 可以应用先访问本地缓存资源，所以在离线状态时，在没有通过网络接收到更多的数据前，仍可以提供基本的功能（一般称之为 Offline First）。

## 使用前的设置
1. 开启浏览器相关配置：
    * Firefox Nightly: 访问 about:config 并设置 dom.serviceWorkers.enabled 的值为 true; 重启浏览器
    * Chrome Canary: 访问 chrome://flags 并开启 experimental-web-platform-features; 重启浏览器

2. 出于安全原因，Service Workers 要求必须在 HTTPS 下才能运行，localhost 也被浏览器认为是安全源


## 开发者工具
Chrome 有一个 `chrome://inspect/#service-workers` 可以展示当前设备上激活和存储的 service worker。还有个 `chrome://serviceworker-internals` 可以展示更多细节来允许你开始/暂停/调试 worker 的进程