const { app, PORT } = require("./app")

app.listen(PORT,()=>{
console.log(`The server is running successfully in : http://127.0.0.1:${PORT}`);
})
