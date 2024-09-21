## 如何避免cookie被盗取
1. 避免在cooki中泄漏敏感信息，如E-Mail和密码等
2. 将cookie与系统ip绑定
3. 如果网站不需要对cookie进行操作，可以在`Set-Cookie`响应头部设置添加`HttpOnly`, 防止JavaScript代码直接获取cookie