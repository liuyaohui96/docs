// === 使用requestAnimationFrame 重写 0 --> 400px，注意元素设置为脱离正常文档流
const divE = document.querySelector('div');
let left = 0;
let start = 0;
requestAnimationFrame(step);
function step(timeStap) {
  let progress = timeStap - start;

  divE.style.left = progress * 0.2 + 'px';
  console.log(progress, divE.style.left);

  if (progress < 2000) {
    // 运行2000 ms，假如需要移动400px， 则每ms需要移动0.2px
    requestAnimationFrame(step);
  }
}
