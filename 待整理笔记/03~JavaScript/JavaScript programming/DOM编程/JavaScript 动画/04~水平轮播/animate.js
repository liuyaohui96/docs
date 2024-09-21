// 封装animate

/*
properties: object
*/
function animate(el, properties) {
  clearInterval(el.timerId);
  // 设置定时器
  el.timerId = setInterval(() => {
    for (let property in properties) {
      // parseFloat 去除可能存在的px
      let current = parseFloat(getComputedStyle(el)[property]); // 现值
      let target = properties[property]; // 目标值
      // 为了参与速度计算
      if (property === 'opacity') {
        current *= 100;
        target *= 100;
      }

      let speed = (target - current) / 30; // 计算速度
      // ???
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (property === 'opacity') {
        el.style.opacity = (current + speed) / 100;
      } else {
        el.style[property] = current + speed + 'px';
      }
    }
  }, 20);
}
