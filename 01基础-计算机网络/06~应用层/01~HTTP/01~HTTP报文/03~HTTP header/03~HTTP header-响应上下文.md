

## 响应上下文
1. Server

## Server
Server 是 response header，表示服务器所用软件的相关信息

应该避免使用过长或者过于详细的描述作为 Server 的值，因为这有可能泄露服务器的内部实现细节，有利于攻击者找到或者探测已知的安全漏洞。

```shell
Server: <product>
```