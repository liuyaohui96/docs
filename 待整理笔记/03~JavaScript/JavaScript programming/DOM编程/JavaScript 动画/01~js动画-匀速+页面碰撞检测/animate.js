// 调用动画函数move

const divE1 = document.querySelector('div.box1');
const divE2 = document.querySelector('div.box2');

divE1.speedX = 10;
divE1.speedY = 10;

divE2.speedX = 12;
divE2.speedY = 12;

setInterval(function() {
  move(divE1);
  move(divE2);
}, 20);

function move(ele) {
  const eleStyle = getComputedStyle(ele);
  let left = parseFloat(eleStyle.left);
  let top = parseFloat(eleStyle.top);
  checkBorderCollision(ele);
  checkBlockCollision(divE1, divE2);
  ele.style.left = left + ele.speedX + 'px';
  ele.style.top = top + ele.speedY + 'px';
}

// === checkBorderCollision function
// 取反speed
function checkBorderCollision(ele) {
  const eleStyle = getComputedStyle(ele);
  let left = parseFloat(eleStyle.left);
  let top = parseFloat(eleStyle.top);
  let w = parseFloat(eleStyle.width);
  let h = parseFloat(eleStyle.height);
  // 检测左边缘
  if (left < 0) {
    ele.style.left = 0;
    ele.speedX *= -1;
  }
  // 到达右边缘
  if (left >= window.innerWidth - w) {
    ele.style.left = window.innerWidth - w + 'px';
    ele.speedX *= -1;
  }

  // 到达上边缘
  if (top < 0) {
    ele.style.top = 0;
    ele.speedY *= -1;
  }
  // 到达下边缘
  if (top > innerHeight - h) {
    ele.style.top = innerHeight - h + 'px';
    ele.speedY *= -1;
  }
}

// === checkBlockCollision function
// 两者中心的距离分别小于两者宽度和一半和两者高度和的一半
// 交换speed
function checkBlockCollision(ele, ele2) {
  const eleStyle = getComputedStyle(ele);
  let left = parseFloat(eleStyle.left);
  let top = parseFloat(eleStyle.top);
  let w = parseFloat(eleStyle.width);
  let h = parseFloat(eleStyle.height);

  const eleStyle2 = getComputedStyle(ele2);
  let left2 = parseFloat(eleStyle2.left);
  let top2 = parseFloat(eleStyle2.top);
  let w2 = parseFloat(eleStyle2.width);
  let h2 = parseFloat(eleStyle2.height);

  let center = {
    x: left + w / 2,
    y: top + h / 2
  };
  let center2 = {
    x: left2 + w2 / 2,
    y: top2 + h2 / 2
  };
  let diffx = Math.abs(center.x - center2.x);
  let diffy = Math.abs(center.y - center2.y);

  // 如果碰撞，交换他们的speed
  if (diffx < (w + w2) / 2 && diffy < (h + h2) / 2) {
    [ele.speedX, ele2.speedX] = [ele2.speedX, ele.speedX];
    [ele.speedY, ele2.speedY] = [ele2.speedY, ele.speedX];
  }
}
