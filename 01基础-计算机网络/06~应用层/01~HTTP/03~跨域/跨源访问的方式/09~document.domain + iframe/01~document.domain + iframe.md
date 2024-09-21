
## document.domain + iframe
该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域

实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域

看个例子：页面a.zf1.cn:3000/a.html获取页面b.zf1.cn:3000/b.html中a的值