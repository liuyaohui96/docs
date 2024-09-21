// 因为我们想获取 DOM 节点,
// 我们在页面加载时初始化我们的脚本.
window.addEventListener('load', function() {
  // 这些变量用于存储表单数据
  var text = document.getElementById('i1');
  var file = {
    dom: document.getElementById('i2'),
    binary: null
  };

  // 使用 FileReader API 获取文件内容
  var reader = new FileReader();

  // 因为 FileReader 是异步的, 会在完成读取文件时存储结果
  reader.addEventListener('load', function() {
    file.binary = reader.result;
  });

  // 页面加载时, 如果一个文件已经被选择, 那么读取该文件.
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // 如果没有被选择，一旦用户选择了它，就读取文件。
  file.dom.addEventListener('change', function() {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // 发送数据是我们需要的主要功能
  function sendData() {
    // 如果存在被选择的文件，等待它读取完成
    // 如果没有, 延迟函数的执行
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // 要构建我们的多重表单数据请求,
    // 我们需要一个XMLHttpRequest 实例
    var XHR = new XMLHttpRequest();

    // 我们需要一个分隔符来定义请求的每一部分。
    var boundary = 'blob';

    // 将我们的主体请求存储于一个字符串中
    var data = '';

    // 所以，如果用户已经选择了一个文件
    if (file.dom.files[0]) {
      // 在请求体中开始新的一部分
      data += '--' + boundary + '\r\n';

      // 把它描述成表单数据
      data +=
        'content-disposition: form-data; ' +
        // 定义表单数据的名称
        'name="' +
        file.dom.name +
        '"; ' +
        // 提供文件的真实名字
        'filename="' +
        file.dom.files[0].name +
        '"\r\n';
      // 和文件的MIME类型
      data += 'Content-Type: ' + file.dom.files[0].type + '\r\n';

      // 元数据和数据之间有一条空行。
      data += '\r\n';

      // 将二进制数据添加到主体请求中
      data += file.binary + '\r\n';
    }

    // 文本数据更简单一些
    // 在主体请求中开始一个新的部分
    data += '--' + boundary + '\r\n';

    // 声明它是表单数据，并命名它
    data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    // 元数据和数据之间有一条空行。
    data += '\r\n';

    // 添加文本数据到主体请求中
    data += text.value + '\r\n';

    // 一旦完成，“关闭”主体请求
    data += '--' + boundary + '--';

    // 定义成功提交数据执行的语句
    XHR.addEventListener('load', function(event) {
      alert('✌！数据已发送且响应已加载。');
    });

    // 定义发生错误时做的事
    XHR.addEventListener('error', function(event) {
      alert('哎呀！出现了一些问题。');
    });

    // 建立请求
    XHR.open('POST', 'https://example.com/cors.php');

    // 添加需要的HTTP头部来处理多重表单数据POST请求
    XHR.setRequestHeader(
      'Content-Type',
      'multipart/form-data; boundary=' + boundary
    );

    // 最后，发送数据。
    XHR.send(data);
  }

  // 访问表单…
  var form = document.getElementById('myForm');

  // …接管提交事件
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    sendData();
  });
});
