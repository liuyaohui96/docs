let lastTime = 0; // 记录上一次函数触发的时间
function throttle(fn, delay) {
  return function() {
    let nowTime = Date.now();
    // 如果超过了延迟，调用指定函数，并修改lastTime
    if (nowTime - lastTime > delay) {
      // 修正this指向问题
      fn.call(this);
      // 同步时间
      lastTime = nowTime;
    }
  };
}

document.addEventListener(
  'scroll',
  throttle(function() {
    console.log('scroll事件被触发了' + new Date().toDateString());
  }, 2000)
);
