
## window.name + iframe
window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）

实现原理：利用三个页面
* a.html和b.html是同域的，都是http://localhost:5500
* b的内容为空
* c.html是 http://localhost:3000
