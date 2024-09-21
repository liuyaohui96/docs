## 需求导入
需求：要实现一个社交网站，有些状态信息需要实时更新，要达成这个需求，就要让应用与服务器保持一个有效连接。

> 这种部分信息的更新使用Ajax发起请求， Ajax每次请求返回指定需要的部分信息而不是完整新页面，不对页面进行刷新。

需求解决：http并不是持久连接，它是无状态的。最简单的实现方法，就是让用户和服务器之间保持长轮询（long polling）
> **轮询**：客户端定时向服务器发送Ajax请求，服务器接到请求后马上返回响应信息并关闭连接。    
  **长轮询**：客户端向服务器发送Ajax请求，服务器接到请求后hold住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。利用这个方法，可以让浏览器始终保持等待响应的状态

传统的web服务器（比如Apache），每一个请求都会让服务器创建一个新的进程来处理这个请求。每次一个新用户连到网站上，服务器就得开一个连接。每个连接都需要占一个进程，这些进程大部分时间都是闲着的，虽然这些进程闲着，但是照样占用内存,如果用户连接数的增长到一定规模，你服务器就会耗光内存直接瘫痪。

解决方法就是: 非阻塞和事件驱动。
> 非阻塞的服务器就像一个loop循环，一个新请求来了，这个loop就接了这个请求，把这个请求传给其他的进程,然后响应一个回调（callback）,完事了这loop就接着跑，接其他的请求,服务器就不会像之前那样傻等着数据库返回结果了, 数据库把结果返回来了，loop就把结果传回用户的浏览器，接着继续跑, 服务器的进程就出现空闲状态。


而javascript本身就是给事件处理量身定制的语言

## 方法论：与华罗庚的《统筹方法》想类似
泡壶茶喝，开水没有；水壶要洗，茶壶茶杯要洗。最好的办法是先烧水，在烧水期间洗东西。


## Node.js的概念
Node.js is a server-side platform built on V8 engine.(因为选择了V8作为引擎,所以选择了使用C++语言进行编写). Node.js use an event-driven, non-blocking I/O model.

Feature of Node.js
1. Asynchronous and event-driven. Never wait for an API to return data, but move to next api after 
2. Fast. Built on V8 engine
3. Single thread. Single thread with event looping
4. No buffering. Never buffer any data


> 设计思想：以事件驱动为核心，提供的绝大多数 API 都是基于事件的、异步的。回调函数都是异步执行的，意味着并不依赖于自身出现的顺序，而是等待相应的事件触发。优势在于，充分利用了系统资源，执行代码无须阻塞等待某种操作完成，有限的资源可以用于其他的任务。
> Node.js 单线程模式运行，推测出这样的设计会导致负载的压力集中在 CPU而不是内存

## Whree to use Node.js
* DIRT:data-intensive real-time( 数据密集型实时)程序。Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，为网络服务而设计.
* Single page application
* node并不是适合所有应用场景的，注重CPU运算的，肯定不会node写。




