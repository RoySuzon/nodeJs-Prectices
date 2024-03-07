const http = require("http");
const port = 400;
const hostName = '127.0.0.1'

const myServer = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' });
const fs = require('fs');
  res.end('Hi I am Goutom');
});



myServer.listen(port,()=>{
    console.log(`Server is sucessfully connected with port http://${hostName}:${port}`)
})


