let request = new XMLHttpRequest();
request.open('GET', 'foo.txt', true);
request.send();

request.onreadystatechange = function() {
  if (this.readyState == this.HEADERS_RECEIVED) {
    // Get the raw header string
    let headers = request.getAllResponseHeaders();

    // 转换headers字符串为array
    let arr = headers.trim().split(/[\r\n]+/);

    // Create a map of header names to values
    let headerMap = {};
    arr.forEach(line => {
      let parts = line.split(': '); // 以：分割为两部分
      headerMap[parts[0]] = parts[1];
    });
    console.log(headerMap['content-type']); // 整理后尝试输出content-type
  }
};
