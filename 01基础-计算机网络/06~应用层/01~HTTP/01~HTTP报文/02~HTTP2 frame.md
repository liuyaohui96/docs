
## HTTP2 frame
HTTP / 1.x消息在性能上有一些缺点：
1. Header，不像bodies一样可以压缩
2. 两个报文之间的 header 通常非常相似，但它们仍然在连接中重复传输
3. 无法进行多路复用。需要在同一台服务器上打开多个连接：热TCP连接比冷TCP更有效


HTTP/2 引入了一个额外的步骤：它将 HTTP/1.x 消息分成帧并嵌入到流 (stream) 中。数据和header帧是分开的，这允许header压缩。可以将多个流组合在一起，这是一个被称为 多路复用 (multiplexing) 的过程，可它允许更有效的底层 TCP 连接