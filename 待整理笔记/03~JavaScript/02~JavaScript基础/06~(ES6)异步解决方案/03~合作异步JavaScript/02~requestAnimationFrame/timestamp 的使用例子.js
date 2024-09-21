// requestAnimationFrame()  的回调函数接受一个timestap参数，
// 该参数表示requestAnimationFrame() 开始去执行回调函数的时刻。
// 这对于想在特定时刻运行指定代码有用
let startTime = null;

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }
  currentTime = timestamp - startTime;
  // Do something based on current time
  requestAnimationFrame(draw);
}

draw();
