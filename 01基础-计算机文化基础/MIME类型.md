用来指示格式和标准规范
MIME 的全称为“Multipurpose Internet Mail Extensions”, 多用途互联网邮件扩展, 指的是一系列的电子邮件技术规范, 作为 SMTP(Simple Mail Transfer Protocal) 的一个扩展。

一个 MIME 类型 通常分为两部分：一个类型和一个子类型（用斜线 “/” 分割）

| 数据格式               | 描述                                         |
| ---------------------- | -------------------------------------------- |
| text/plain             | 纯文本，告诉浏览器按照文本格式解释           |
| text/html              | 文本与网页，告诉浏览器按照 html 格式解释内容 |
| text/css               | 样式， 告诉浏览器以 CSS 方式解释             |
| application/javascript | js 代码片断， 告诉浏览器按照 JS 方式运行解释 |
| application/xml        | 按 XML 的方式解释                            |
| application/json       | 按 json 方式解释                             |
| images/jpeg            | 图片                                         |