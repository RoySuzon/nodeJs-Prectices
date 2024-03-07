const express = require("express");
const { router } = require("./routes/users.route");
// const path = require('path');
PORT = process.env.PORT || 8080;
const app = express();
const package = "/package"
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get("/register",(req,res)=>{
res.sendFile(__dirname+'/register.html');
})
app.post("/register",(req,res)=>{
  const {fullName,age} = req.body;
res.json({
fullName:fullName,age:age

});
})
app.use("/api/user", router);







// Home Route 
// app.post("/", (req, res) => {
//   // const {id,name} = req.query; 

//   const name = req.body.name;
//    if(name == undefined){
//     res.json({status:'erro' });
//    }
//    else{
//     res.json({status:'sucess',
//   data:{student_name:name }});
//    }
  
// });

//
console.log('http://127.0.0.1:8080/api/movies')
app.get(package, (req, res) => {
  // res.on();

  res.sendFile(__dirname + "/package.json");
});
app.get("/api/movies", (req, res) => {

  // res.on();

  res.sendFile(__dirname + "/movies.json");
});

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');
});


//Circle 
app.get('/circle',(req,res)=>{
  res.sendFile(__dirname+'/circle.html');
  });
//circle Calculate

app.post('/circle',(req,res)=>{
  const {radious} = req.body;
  res.send(`${2* Math.PI* radious}`);
  });


app.use((req, res) => {
  res.send("<h1>404 erro!</h1>");
});

module.exports = { app, PORT, router };
