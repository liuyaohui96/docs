// 对象A直接调用对象B的某个方法,
// 导致的问题是A和B紧密耦合，修改B可能导致A调用B的方法失效

// 设计成： 对象A生成消息 -> 将消息通知给一个消息处理器（Observable）
// 消息处理器将消息传递给B

//  具体的调用过程变成：
// A.emit(‘message’, data); B.on(‘message’, function (data) { })

/* 实现这一事件消息代理功能, 请将事件消息功能补充完整
    function EventEmitter(){

    }
*/
function EventEmitter() {
  this.eventFunctionMap = {}
}

EventEmitter.prototype.emit = function(eventName, data) {
  this.eventFunctionMap[eventName] = data
}

EventEmitter.prototype.on = function(eventName, callback) {
  this.eventFunctionMap[eventName] = callback
}
