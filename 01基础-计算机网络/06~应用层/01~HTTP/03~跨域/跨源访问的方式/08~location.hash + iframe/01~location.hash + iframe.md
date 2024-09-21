
## location.hash + iframe
实现原理：a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信

具体实现步骤：
* a.html给c.html传一个hash值
* 然后c.html收到hash值后，再把hash值传递给b.html
* 最后b.html将结果放到a.html的hash值中
* a.html和b.html是同域的，都是http://localhost:5500;而c.html是http://localhost:3000