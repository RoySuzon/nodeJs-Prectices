const { app, PORT } = require("./app");


app.listen(PORT,()=>{
    console.log(`Server is conncected in the port:${PORT}`);
})