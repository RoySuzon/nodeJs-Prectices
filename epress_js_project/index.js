const { app, PORT, hostName } = require("./app");

app.listen(PORT,()=>{
    console.log(`The server is sucessfully running on  : http://${hostName}:${PORT}`);
});