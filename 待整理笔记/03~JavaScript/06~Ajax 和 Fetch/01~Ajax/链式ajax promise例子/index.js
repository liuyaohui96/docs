// 封装一个ajax，使用promise实现
function ajaxPromsie(method, url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 302) {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = function() {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

let datas = '';
new ajaxPromsie('get', 'http://localhost:3000/ajaxPromise/?filename=data1.json')
  .then(data => {
    datas = data + '<br>';
    return new ajaxPromsie(
      'get',
      'http://localhost:3000/ajaxPromise/?filename=data2.json'
    );
  })
  .then(data => {
    datas += data + '<br>';
    return new ajaxPromsie(
      'get',
      'http://localhost:3000/ajaxPromise/?filename=data3.json'
    );
  })
  .then(data => {
    datas += data + '<br>';
    document.querySelector('.content').innerHTML = datas;
  });
