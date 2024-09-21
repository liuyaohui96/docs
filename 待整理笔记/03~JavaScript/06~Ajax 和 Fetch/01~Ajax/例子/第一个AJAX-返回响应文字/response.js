var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("my name is liuyaohui"); //write a response to the client
    res.end(); //end the response
  })
  .listen(5500, "localhost", () => {
    console.log("开始监听...");
  }); //the server object listens on port 8080
