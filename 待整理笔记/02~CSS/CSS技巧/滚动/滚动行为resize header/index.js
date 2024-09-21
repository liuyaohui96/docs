(function() {
  window.addEventListener('scroll', scrollHandler);
  const header = document.querySelector('header');
  let isChange = false;
  function scrollHandler() {
    if (document.documentElement.scrollTop >= 60) {
      header.style.fontSize = '25px';
    } else {
      header.style.fontSize = '72px';
    }
  }
})();
