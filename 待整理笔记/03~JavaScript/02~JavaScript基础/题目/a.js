// A、time apan:700.077ms
// B、time apan:0.066ms
// C、time apan:500.077ms
// D、time apan:100.077ms

// console.time()语句和console.timeEnd()语句是用来对程序的执行进行计时的
/*
f1和f2被都setTimeout()事先设置的定时器装到一个事件队列里面。
本来f1应该在100ms后就要执行了，但是因为waitForMs()占用了线程，
而执行JavaScript是单线程的，所以就没办法在100ms后执行那个f1，
所以需要等500ms等waitForMs()执行完,然后再执行f1和f2，这时候f1和f2就几乎同时执行了。
所以应该选时间最短的一项
*/
function f1() {
  console.time('time span')
}
function f2() {
  console.timeEnd('time span')
}

setTimeout(f1, 100)

setTimeout(f2, 200)

function waitForMs(n) {
  var now = Date.now()

  while (Date.now() - now < n) {}
}

waitForMs(500)
