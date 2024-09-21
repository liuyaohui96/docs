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
    this.slides = element.querySelectorAll('slides');

    this.slidesNum = this.slides.length;
    this.currentIdx = 0;
    this.nextIdx = 0;

    // 是否自动
    this.autoPlay = ele.classList.contains('slides-autoplay');
    this.autoPlayId;
    this.autoPlayDelay = 500; // default
    this.init();
  }

  Slides.prototype.init = function() {
    this.setAutoPlay();
  };

  Slides.setAutoPlay = function() {
    // 自动播放设置
    if (this.autoPlay) {
      clearInterval(this.autoPlayId); // 清除可能存在的interval
      this.autoPlay = setInterval(this.autoPlaySlider(), this.autoPlayDelay);
    }
  };

  // 自动播放中setInterval调用的回调函数
  Slides.prototype.autoPlaySlider = function() {
    // this.currentIdx = this.nextIdx
    if (this.nextIdx < this.slidesNum - 1) {
      this.nextIdx++;
      this.nextSlide(); // 滑动到下一张
    } else {
      this.nextIdx = 0;
      this.nextSlide(); // 滑动到下一张
    }
    // 更新 maker 或者 indicator, 暂时忽略
  };

  // nextSlide
  Slides.prototype.nextSlide = function() {
    this.slides[this.currentIdx].classList.remove('slide-selected');
    this.slides[this.nextIdx].classList.add('slide-moving');

    this.slides.forEach((slide, idx) => {
      if (this.nextIdx > idx) {
        // && this.nextIdx > this.currentIdx
        slide.classList.add('slide-move-left');
      } else if (this.nextIdx == idx && this.nextIdx > this.currentIdx) {
        slide.classList.add('slide-from-right');
      } else if (this.nextIdx == idx && this.nextIdx < this.currentIdx) {
        slide.classList.add('slide-from-left');
        slide.classList.remove('slide-move-left');
      } else if (this.nextIdx < idx) {
        //  && this.nextIdx < this.currentIdx
        slide.classList.remove('slide-move-left');
      }
    });
  };

  // ====== 辅助函数
})();
