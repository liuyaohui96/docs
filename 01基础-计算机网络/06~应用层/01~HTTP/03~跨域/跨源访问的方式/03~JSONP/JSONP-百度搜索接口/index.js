const inputEl = document.querySelector('input');

inputEl.addEventListener('input', function() {
  jsonp('http://suggestion.baidu.com/su', this.value, 'getData').then(data => {
    document.body.removeChild(document.querySelector('#jsonp'));
    const ulEl = document.querySelector('ul');
    ulEl.innerHTML = '';
    console.log(data.s);
    data.s.forEach(item => {
      const liEl = document.createElement('li');
      liEl.textContent = item;
      ulEl.appendChild(liEl);
    });
  });
});

function jsonp(url, wd, cb) {
  return new Promise((resolve, reject) => {
    let scriptEl = document.createElement('script');
    scriptEl.src = `${url}?wd=${wd}&cb=${cb}`;
    scriptEl.id = 'jsonp';
    document.body.appendChild(scriptEl);
    window[cb] = function(data) {
      resolve(data);
    };
  });
}
