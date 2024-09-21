const http = require('http');
const fs = require('fs');
let data = 0;
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url == '/iframe-streaming') {
    setInterval(function() {
      let date = new Date().toLocaleString();
      res.write(`
         <script type="text/javascript">
           parent.document.getElementById('clock').innerHTML = "${date}";//改变父窗口dom元素
         </script>
       `);
    }, 1000);
  }
});

server.listen(5500, () => {
  console.log('server listen at port 5500...');
});
