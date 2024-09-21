
## postMessage
postMessage 通过用作前端页面之前的跨域，如父页面与iframe页面的跨域。window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源

## window.postMessage()
window.postMessage() 常用于：
* 窗口之间的通信
* 窗口与嵌套iframe的通信
* 跨域通信

方法需要的参数：
* message：将要发送到其他 window的数据
* targetOrigin：指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI
* 可选的transfer一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权

```js
otherWindow.postMessage(message, targetOrigin[ ,transfer]);
```


## 安全问题
* 如果不希望从其他网站接收message，请不要为message事件添加任何事件侦听器。
* 如果确实希望从其他网站接收message，请始终使用origin和source属性验证发件人的身份。验证身份后，仍然应该始终验证接收到的消息的语法。
* 使用postMessage将数据发送到其他窗口时，始终指定精确的目标origin，而不是*。恶意网站可以在您不知情的情况下更改窗口的位置，因此它可以拦截使用postMessage发送的数据
* 任何窗口都可以向任何其他窗口发送消息，不能保证未知发件人不会发送恶意消息
