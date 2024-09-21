
## 双向实时通信
HTTP 协议中通信只能由客户端发起，HTTP 协议做不到服务器主动向客户端推送信息

WebSocket协议之前，有三种实现双向通信的方式：
* 轮询（polling）
* 长轮询（long-polling）
* iframe流（streaming）