const http = require("http");
const fs = require("fs");
const port = 8080;
// const statusCode = 200;
const hostName = "127.0.0.1";
const server = http.createServer((req, res) => {
    const mainUrl = './views/';
    const handleReciveFile =  (statusCode, fileNameWithExtention)=>{
        fs.readFile(`${mainUrl}${fileNameWithExtention}`, (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
    
    }



  if (req.url == "/") {
   handleReciveFile(200,"index.html")
  }
 else if (req.url == "/about") {
   handleReciveFile(200,'about.html')
  }
 else if (req.url == "/contact") {
    handleReciveFile(200,'contact.html');
  }
  else{
   handleReciveFile(404,'error.html')
  }

});
server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
});
