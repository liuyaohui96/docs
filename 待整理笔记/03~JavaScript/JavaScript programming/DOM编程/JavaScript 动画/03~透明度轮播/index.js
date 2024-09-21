// IIFE
(function() {
  let slider;
  let sliderItems;
  let bullets;
  let prevIdx;
  let nextIdx;
  let timerId;

  let len;

  init();
  function init() {
    prevIdx = nextIdx = 0;
    sliderItems = document.querySelectorAll('.slider-item');
    len = sliderItems.length;
    bullets = document.querySelectorAll('.bullet');

    // 事件绑定
    document.querySelector('.prev').addEventListener('click', function() {
      slidePrev();
    });
    document.querySelector('.next').addEventListener('click', function() {
      slideNext();
    });

    [...bullets].forEach((bullet, idx) => {
      bullet.addEventListener('click', function() {
        prevIdx = nextIdx;
        nextIdx = idx;
        slideTo(prevIdx, nextIdx);
      });
    });

    slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', function() {
      clearInterval(timerId);
    });
    slider.addEventListener('mouseout', function() {
      auto();
    });

    // 自动动画
    auto();
  }

  function slidePrev() {
    prevIdx = nextIdx;
    nextIdx--;
    if (nextIdx < 0) {
      nextIdx = len - 1;
    }
    slideTo(prevIdx, nextIdx);
  }

  function slideNext() {
    prevIdx = nextIdx;
    nextIdx++;
    if (nextIdx == len) {
      nextIdx = 0;
    }
    slideTo(prevIdx, nextIdx);
  }

  function slideTo(prevIdx, nextIdx) {
    bullets[prevIdx].classList.remove('focus');
    bullets[nextIdx].classList.add('focus');
    animate(sliderItems[prevIdx], { opacity: 0 });
    animate(sliderItems[nextIdx], { opacity: 1 });
  }

  function auto() {
    clearInterval(timerId); // 避免重复动画
    timerId = setInterval(() => {
      slideNext();
    }, 1000);
  }
})();
