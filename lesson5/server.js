const http = require("http");
const port = 50001;
const hostName = '127.0.0.1'
const statusCode = 200;

const myServer = http.createServer((req, res) => {
  res.writeHead(statusCode, { 'content-Type': 'text/html' });

  res.write('<h2>Hello ROY</h2>');
  res.end();
});



myServer.listen(port,()=>{
    console.log(`Server is sucessfully connected with port http://${hostName}:${port}`)
})


