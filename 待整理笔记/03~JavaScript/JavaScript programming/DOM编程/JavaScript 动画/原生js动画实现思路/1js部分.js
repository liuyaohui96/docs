/**
 * @param {Number} value 设置动画过渡的值
 * @param {Number} time 设置动画过渡时间
 * @param {Function} callback 动画过渡回调函数
 * @param {Function} timingFunc 动画事件曲线函数
 */
function animate(value, time, callback, timingFunc = t => t) {
  // 获得动画起始时间
  let startTime = performance.now()

  // 循环调用过渡函数
  function loop() {
    // 下一次重绘前更新下一帧动画
    raf = requestAnimationFrame(loop)

    // 当前帧与起始帧时间差
    let passTime = performance.now() - startTime
    // 时间差/过渡时间 获取百分比
    let per = passTime / time
    if (per >= 1) {
      per = 1
      cancelAnimationFrame(raf) // 取消动画
    }
    let animateValue = value * timingFunc(per)

    // 调用回调函数，并传递过渡的距离值
    callback(animateValue)
  }
  // 下一次重绘前更新下一帧动画
  let raf = requestAnimationFrame(loop)
}

// 定义一个加速函数
function easeIn(t) {
  return t ** 2
}

// 加速后抖一抖
function shake(time) {
  if (time < 0.6) {
    return (time / 0.6) ** 2
  } else {
    return Math.sin((time - 0.6) * ((3 * Math.PI) / 0.4)) * 0.2 + 1
  }
}

const box = document.querySelector('.box') // 获取方块元素
animate(
  1000,
  3000,
  value => {
    box.style.transform = `translateX(${value}px)` // 将数值设置给 方块 的 css 属性 transform 属性可以控制元素在水平方向上的位移
  },
  // easeIn
  shake
)
