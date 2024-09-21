/*
EventTarget类型有一个单独的属性handlers，用于存储事件处理程序（观察者）。
addHandler() 用于注册给定类型事件的事件处理程序；
fire() 用于触发一个事件；
removeHandler() 用于注销某个事件类型的事件处理程序。
*/

function EventTarget() {
  this.handlers = {}
}

EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function(type, handler) {
    if (typeof this.handlers[type] === 'undefined') {
      this.handlers[type] = []
    }
    this.handlers[type].push(handler)
  },
  fire: function(event) {
    if (!event.target) {
      event.target = this
    }
    if (this.handlers[event.type] instanceof Array) {
      const handlers = this.handlers[event.type]
      handlers.forEach(handler => {
        handler(event)
      })
    }
  },
  removeHandler: function(type, handler) {
    if (this.handlers[type] instanceof Array) {
      const handlers = this.handlers[type]
      for (var i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i] === handler) {
          break
        }
      }
      handlers.splice(i, 1)
    }
  }
}
//使用
function handleMessage(event) {
  console.log(event.message)
}
//创建一个新对象
var target = new EventTarget()
//添加一个事件处理程序
target.addHandler('message', handleMessage)
//触发事件
target.fire({ type: 'message', message: 'Hi' }) //Hi
//删除事件处理程序
target.removeHandler('message', handleMessage)
//再次触发事件，没有事件处理程序
target.fire({ type: 'message', message: 'Hi' })
