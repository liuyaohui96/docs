const targets = document.querySelectorAll('.lazy img');
[...targets].forEach(lazyLoad);

function lazyLoad(target) {
  const io = new IntersectionObserver((entries, observer) => {
    [...entries].forEach(entry => {
      // 当前目标元素是否与root元素（这里是视窗）相交
      if (entry.isIntersecting) {
        const img = entry.target; // 获得entry相关的目标元素
        const src = img.getAttribute('data-lazy');
        img.classList.add('fadeIn');
        img.setAttribute('src', src);
        observer.disconnect(); // 关闭当前元素的观测
      }
    });
  });
  io.observe(target); // IntersectionObserver 开始监听
}
