
## popstate event
当会话历史记录发生改变的时候触发。

事件会将用户当前访问的历史记录条目作为用户最后一页的条目；如果使用`History.pushState()`将历史记录添加到历史记录堆栈中，则使用该历史记录条目代替。


## history stack
如果要激活的历史记录条目是通过调用 `history.pushState()`创建或者受到了调用`history.replaceState()`的调的影响，popstate事件的state属性将包含历史记录条目的state object的副本。

注意，仅调用 `history.pushState()`或`history.replaceState()`不会触发popstate事件。popstate事件将通过执行浏览器操作（例如单击后退或前进按钮（或在JavaScript中调用`history.back() 或history.forward()`来触发。

## 发送popstate时
发生过渡时，由于用户触发了浏览器的“后退”按钮或者其他，popstate事件即将过渡到新位置。

* 它发生在新位置已加载（如果需要），可见(make visible)之后
* 在发送pageshow事件之后，
* 但在恢复持久的用户状态信息并发送hashchange事件之前。

