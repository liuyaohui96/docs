我的总结：
* node 是单线程，默认是non-block or asynchronous
* non-blocking or asynchronous(非阻塞或者异步)。举个例子，服务员服务于餐厅里的客人，去到一各桌上获得order，交给厨师，继续服务其他桌，而不用等待厨师做完菜。例子中， 服务员就是single thread，每个桌面就是请求。

* 在node里我们使用单线程来处理所有的请求， 处理完一个请求继续处理下一个请求，请求的结果（message）会放在`event queue`中, node 会不断监听这个queue， 挡在queue发现这个事件，它会将他取出来，然后执行，这种架构让node 可以让node非常适用IO密集(很多磁盘或者网络访问)的应用程序。

* blocking（阻塞） or synchronous(同步) 有一个问题，当我们要处理大量的请求的时候，有时我们耗尽了线程来服务客户端，新的客户端请求需要等待线程free，如果不想等待，需要添加更多的硬件资源。这种架构我们没有有效利用我们的资源

* 下面的情形不适用使用node，`do not use Node for cpu-intensive apps`, 例如 视频编码，图像处理。有很多CPU计算的应用，很少的文件系统访问，很少的网络访问，这种情况都不适用于node， 因为node是单线程的，如果为一个client执行计算，其他client需要等待

* 所以node仅适用于构建data-intensive and real-time应用

# 原文
note application are highly scalable and this is because of the non-blocking or asynchronous nature of note 

metaphor(隐喻)

when we receive a request on the server a thread is allocated to handle that request, 
as part of handing that requests, e.g, we are going to query a database and as you know, somethimes it may take a little while until the result is ready, when the database is executing the query  that thread is sitting there waiting, it can't be used to serve another client,

so we need a new thread to serve another client, image we have a large number of concurrent clients, at some point we are going to run out of threads to serve these clients 

so new clients have to wait until three threads

new clients have to wait until free threads are avaliable, if we don't want them to wait, we need to add mroe hardware, so with this kind of architecture, we are not utilizing our resoures efficiently, this is the problem with blocking or synchronous architecture

and as i explained that's how applications built with frameworks

