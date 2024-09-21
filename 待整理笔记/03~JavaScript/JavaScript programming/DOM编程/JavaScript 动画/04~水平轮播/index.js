(function() {
  let slider;
  let sliderList;
  let sliderItems;
  let sliderItemWidth; // 单个item宽度
  let len; // 个数
  let bullets;
  let nextIdx;
  let timerId;

  init();
  function init() {
    sliderList = document.querySelector('.slider-list');

    // 复制第一张图片放到最后面，复制最后一张图片放到最前面
    let firstItem = document.querySelector('.slider-item:first-child');
    let copyFirstItem = firstItem.cloneNode(true);
    let lastItem = document.querySelector('.slider-item:last-child');
    let copyLastItem = lastItem.cloneNode(true);
    sliderList.appendChild(copyFirstItem);
    sliderList.insertBefore(copyLastItem, firstItem);
    sliderItems = document.querySelectorAll('.slider-item');
    // 计算总宽度
    sliderItemWidth = sliderItems[0].offsetWidth;
    len = sliderItems.length;
    sliderList.style.width = sliderItemWidth * len + 'px';

    nextIdx = 1; // 因为新增加了一张图片
    sliderList.style.left = -sliderItemWidth + 'px'; // 定位到第二张图片

    // 绑定事件
    document.querySelector('.prev').addEventListener('click', function() {
      slidePrev();
    });
    document.querySelector('.next').addEventListener('click', function() {
      slideNext();
    });

    bullets = document.querySelectorAll('.bullet');
    [...bullets].forEach((bullet, index) => {
      bullet.addEventListener('click', function() {
        nextIdx = index + 1;
        slideTo();
      });
    });

    slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', function() {
      clearInterval(timerId);
    });
    slider.addEventListener('mouseout', function() {
      auto();
    });

    // auto
    auto();
  }

  function slidePrev() {
    nextIdx--;
    slideTo();
  }
  function slideNext() {
    nextIdx++;
    slideTo();
  }
  function slideTo() {
    // 没有最后一张图片了，修正nextIdx
    if (nextIdx === len) {
      nextIdx = 2;
      // 回到第二张图片的位置，第二张图片与最后一张图片相同，使得没有动画效果
      sliderList.style.left = -sliderItemWidth + 'px'; //
    }
    // 没有前一张图片了，修正currentIdx为倒数第三个 len-3
    if (nextIdx === -1) {
      nextIdx = len - 3;
      // 回到倒数第二张图片的位置，倒数第二张图片与最后一张图片相同，使得没有动画效果
      sliderList.style.left = -(len - 2) * sliderItemWidth + 'px';
    }

    let focusIndex;
    // 第一张图片实际上聚焦最后一个bullet
    if (nextIdx == 0) {
      focusIndex = bullets.length - 1;
    } else if (nextIdx == len - 1) {
      // 最后一张图片实际上聚焦的是第一个bullet
      focusIndex = 0;
    } else {
      focusIndex = nextIdx - 1;
    }
    document.querySelector('.focus').classList.remove('focus');
    bullets[focusIndex].classList.add('focus');

    let left = -nextIdx * sliderItemWidth;
    animate(sliderList, { left });
  }
  function auto() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      slideNext();
    }, 2000);
  }
})();
