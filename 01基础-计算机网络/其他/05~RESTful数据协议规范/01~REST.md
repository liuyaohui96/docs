
## REST
RSET（REpresentational State Transfer 表述性状态转移）并不是具体的协议，是一个用于网络架构之间相互调用数据的规范风格。资源以某种表现形式(JSON，XML,JPG)进行状态转移。状态的转移通过HTTP动词实现。REST 架构模式中，客户端和服务器端的实现独立完成，所以在前端的修改不会影响到后端的操作，同样，服务器后端修改也不会影响到前端的实现，只要他们知道发送给对方的消息格式。

## 规范风格

```shell
# 版本
* --> path/v1/*

# 增加book
post --> path/v1/book/

# 删除序号为4的book
delete --> path/v1/book/4 

## 修改序号为4的book
put --> path/v1/book/4

## 查询序号为4的book
get --> pat/v1/book/4

```

还有以下要求：
* 保证 HEAD 和 GET 方法是安全的，不会对资源状态有所改变（污染）
* 使用正确的HTTP Status Code表示访问状态（详细查看http关于响应状态码的内容）
* 在返回结果用明确易懂的文本（String），注意返回的错误是要给人看的