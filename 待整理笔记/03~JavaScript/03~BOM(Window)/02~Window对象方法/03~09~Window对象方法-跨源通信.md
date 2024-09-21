
## Window对象方法-跨源通信

window.postMessage()可以安全地实现跨源通信。通常，只有同源才进行通信。window.postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全。

```js
// message 将要发送到其他 window的数据
// targetOrigin 指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI
// transfer， 可选，是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收  //方，而发送一方将不再保有所有权
therWindow.postMessage(message, targetOrigin, [transfer]);
```

## 跨源通信的实现步骤
1. 一个窗口可以获得对另一个窗口的引用（比如 `targetWindow = window.opener`）
2. 然后在targetWindow窗口上调用 targetWindow.postMessage() 方法分发一个  MessageEvent 消息
3. 接收消息的窗口可以根据需要自由处理此事件


## 安全问题
如果您不希望从其他网站接收message，请不要为message事件添加任何事件侦听器。如果您确实希望从其他网站接收message，请始终使用origin和source属性验证发件人的身份。

任何窗口（包括例如http://evil.example.com）都可以向任何其他窗口发送消息，并且您不能保证未知发件人不会发送恶意消息。 但是，验证身份后，您仍然应该始终验证接收到的消息的语法。

使用postMessage将数据发送到其他窗口时，始终指定精确的目标origin，而不是*