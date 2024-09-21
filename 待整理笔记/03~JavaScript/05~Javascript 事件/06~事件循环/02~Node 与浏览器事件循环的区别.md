
## Node 与浏览器事件循环的区别
* 浏览器环境下，microtask(微任务）的任务队列是每个macrotask（宏任务）执行完之后执行
* Node.js中，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行microtask队列的任务

node版本更新到11，Event Loop运行原理发生了变化，一旦执行一个阶段里的一个宏任务(setTimeout,setInterval和setImmediate)就立刻执行微任务队列，这点就跟浏览器端一致