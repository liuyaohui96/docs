(function() {
  const target = 'Lorem';
  const typeWriter = document.querySelector('.type-writer');
  let timer;

  document.querySelector('button').addEventListener('click', clickHandler);

  function clickHandler() {
    if (timer) return;
    for (let count = 0; count < target.length; count++) {
      timer = setTimeout(() => {
        typeWriter.innerHTML += target[count];
      }, 500 * (count + 1));
    }
  }
})();
