1. ctx.body =
  - string
  - buffer
  - Stream
  - OBjet
  - null


2. ctx.header
  - 响应头

3. res.status
  - 状态码

4. res.message  
  - 将响应的状态消息设置为给定值
  - 状态描述

5. response.set(field, value)
  - 设置响应标头 field 到 value: 

6. response.set(fields)
  - 用一个对象设置多个响应标头fields:

7. response.redirect(url, [alt])
  - 执行 [302] 重定向到 url.