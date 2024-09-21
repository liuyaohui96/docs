
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
中的HTTP/3 - HTTP over QUIC

## HTTP3
HTTP基于QUIC上而不是TCP上（HTTP over QUIC）

QUIC 虽然基于 UDP，但是在原本的基础上新增了很多功能：
* QUIC基于UDP，而UDP是“无连接”的，不需要“握手”和“挥手”，这意味着QUIC可以用最快的速度来发送和接收数据，这样可以大大提升首次打开页面的速度
* 实现了可靠传输，保证数据一定能够抵达目的地
* 集成了TLS加密功能。QUIC使用的是TLS1.3，相较于早期版本TLS1.3有更多的优点，其中最重要的一点是减少了握手所花费的RTT个数。
* 多路复用，彻底解决TCP中队头阻塞的问题。QUIC实现了在同一物理连接上可以有多个独立的逻辑数据流。实现了数据流的单独传输，就解决了TCP中队头阻塞的问题。