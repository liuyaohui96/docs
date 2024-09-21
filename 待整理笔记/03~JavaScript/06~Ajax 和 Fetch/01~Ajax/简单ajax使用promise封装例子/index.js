// 因为ajax是异步的，可以使用promise获取数据

const btn = document.querySelector('button');
btn.onclick = function() {
  let promise = ajaxPromise('get', 'http://localhost:3000/testAjax');
  promise.then(data => {
    document.querySelector('.content').textContent = data;
  });
};

function ajaxPromise(method, url, body) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onload = function() {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = function(err) {
      console.log(xhr.statusText);
    };
    xhr.send();
  });
}
