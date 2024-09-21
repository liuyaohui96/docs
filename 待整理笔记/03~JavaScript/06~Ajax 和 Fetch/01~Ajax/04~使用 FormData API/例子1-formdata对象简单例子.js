let formData = new FormData();

formData.append('username', 'Groucho');
formData.append('accountnum', 123456); //数字123456会被立即转换成字符串 "123456"

// HTML 文件类型input，由用户选择
formData.append('userfile', fileInputElement.files[0]);

// JavaScript file-like 对象
let content = '<a id="a"><b id="b">hey!</b></a>'; // 新文件的正文...
let blob = new Blob([content], { type: 'text/xml' });

formData.append('webmasterfile', blob);

let request = new XMLHttpRequest();
request.open('POST', 'http://foo.com/submitform.php');
request.send(formData);
