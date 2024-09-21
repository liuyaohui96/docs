document.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 10) {
    document.querySelector('.navbar').classList.add('active');
  } else {
    document.querySelector('.navbar').classList.remove('active');
  }
});

/*
从 hero-slider 借鉴形成的不具有兼容性的hero-slider
  github地址: https://github.com/CodyHouse/hero-slider
*/
(function() {
  // 构造函数
  function Slides(element) {
    // 获取 slideIndicator
    this.slidesIndicator = element.querySelectorAll('slides-indicators');

    // 根据实际需要是否创建slide-maker，这里不需要

    // 获取slides
    this.slides = element.querySelectorAll('.slide');

    this.slidesNum = this.slides.length;
    this.currentIdx = this.slidesNum - 1;
    this.nextIdx = 0;

    // 是否自动
    this.autoPlay = element.classList.contains('slides-autoplay');
    this.autoPlayId;
    this.autoPlayDelay = 5000; // default
    this.init();
  }

  Slides.prototype.init = function() {
    this.setAutoPlay();
    // 其他暂时忽略
  };

  Slides.prototype.setAutoPlay = function() {
    // 自动播放设置
    if (this.autoPlay) {
      clearInterval(this.autoPlayId); // 清除可能存在的interval
      this.autoPlay = setInterval(() => {
        this.autoPlaySlider();
      }, this.autoPlayDelay);
    }
  };

  // 自动播放中setInterval调用的回调函数
  Slides.prototype.autoPlaySlider = function() {
    if (this.currentIdx < this.slidesNum - 1) this.nextIdx++;
    else this.nextIdx = 0;

    this.slides.forEach(slide => {
      slide.classList.remove('slide-move-left');
      slide.classList.remove('slide-moving');
    });
    this.slides.forEach((slide, idx) => {
      if (idx != this.nextIdx) slide.classList.add('slide-move-left');
    });
    this.slides[this.nextIdx].classList.add('slide-moving');
    // this.slides[this.nextIdx].classList.remove('slide-move-left');
    // this.slides[this.nextIdx].classList.add('slide-moving');
    // this.slides[this.nextIdx].classList.add('slide-selected');

    this.currentIdx = this.nextIdx;
    // 更新 maker 或者 indicator, 暂时忽略
  };

  // ====== 辅助函数

  // 执行

  new Slides(document.querySelector('.slides-container'));
})();

// portfolio
const portfolioItems = document.querySelectorAll('.gallery-col');
const portfolioLi = document.querySelectorAll('.portfolio-item');

portfolioLi.forEach(item => {
  item.addEventListener('click', function() {
    portfolioLi.forEach(item => {
      item.classList.remove('active');
    });
    portfolioItems.forEach(item => {
      item.classList.remove('show');
    });
    this.classList.add('active');

    if (this.classList.contains('city')) showProfolioItem('city');
    if (this.classList.contains('nature')) showProfolioItem('nature');
    if (this.classList.contains('tech')) showProfolioItem('tech');
    if (this.classList.contains('workspace')) showProfolioItem('workspace');
    if (this.classList.contains('all')) showProfolioItem();
  });
});

function showProfolioItem(className) {
  if (!className) {
    portfolioItems.forEach(item => {
      item.classList.add('show');
    });
  } else {
    portfolioItems.forEach(item => {
      if (item.classList.contains(className)) {
        item.classList.add('show');
      }
    });
  }
}

const btns = document.querySelectorAll('.overlay-button');
btns.forEach(item => {
  item.addEventListener('click', function() {
    console.log(this);
    let gallery = document.querySelector('.gallery-show');
    gallery.querySelector('img').src = this.getAttribute('data-target');
    gallery.classList.add('show');
  });
});

document.querySelector('.gallery-close').addEventListener('click', function() {
  document.querySelector('.gallery-show').classList.remove('show');
});
