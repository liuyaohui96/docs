let http = require('http');
let fs = require('fs');
let path = require('path');

let server = http.createServer();

let dir = path.join(__dirname, '/www');
// let dir = `F:/0StarupSoftware/kindle/0github/前端面试/公司真题/JavaSript/AJax/node/实验/3Apache目录列表生成/www`;
server.on('request', (req, res) => {
  fs.readFile(dir + '/temp.html', (err, data) => {
    if (err) return res.end('can not find temp.html');

    // 读取文件目录
    fs.readdir(dir, (err, files) => {
      if (err) return res.end('can not find the files'); // filse is a array, all item is string
      let content = '';
      files.forEach(item => {
        content += `
        <tr>
        <td data-value="picture/">
          <a
            class="icon dir"
            href="/F:/0StarupSoftware/kindle/0github/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/%E5%85%AC%E5%8F%B8%E7%9C%9F%E9%A2%98/JavaSript/AJax/node/%E5%AE%9E%E9%AA%8C/3Apache%E7%9B%AE%E5%BD%95%E5%88%97%E8%A1%A8%E7%94%9F%E6%88%90/www/picture/"
            >${item}/</a
          >
        </td>
        <td class="detailsColumn" data-value="0"></td>
        <td class="detailsColumn" data-value="1551709607">
          2019/3/4 下午10:26:47
        </td>
      </tr>
        `;
      }); // end forEach

      data = data.toString().replace('^liuyaohui$', content);
      res.end(data);
    }); // end readdir
  });
});

server.listen(5500, () => {
  console.log('server start... please access 5500 port');
});
