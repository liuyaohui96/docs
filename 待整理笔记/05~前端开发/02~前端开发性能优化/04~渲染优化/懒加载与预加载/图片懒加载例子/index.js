// 通过docuentElement.clientHeight 获取文档可视区域的高度 = content + 上下padding
const viewHeight = document.documentElement.clientHeight; //获取可视区高度
lazyload(); //刚开始先触发一次函数
// 监听scroll事件
document.addEventListener('scroll', lazyload);

function lazyload() {
  // 获取所有需要需要lazyload的图片
  const lazyloadImages = document.querySelectorAll(
    'img[data-original][lazyload]'
  );
  // 遍历每一个需要lazyLoad的图片
  [...lazyloadImages].forEach(image => {
    if (image.dataset.original === '') return; // 如果没有这个data-original属性就退出
    // 返回值一个 DOMRect 对象，包含了只读left、top、right和bottom属性，相对于视窗
    let rect = image.getBoundingClientRect();
    // 图片进入了可视化区域
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      image.src = image.dataset.original;
      //移除属性，下次不再遍历
      image.removeAttribute('data-original');
      image.removeAttribute('lazyload');
    }
  });
}
