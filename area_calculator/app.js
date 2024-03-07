const express = require('express');
const app = express();
PORT = process.env.PORT || 8080
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false})),
app.use(bodyParser.json());



//Expression for only Parms ,,,,,,,,,,,,,,,,,,,,,,,,
app.get('/reg/:id([0-9]+)/:title([a-zA-Z0-9]+)',(req,res)=>{
 const{id,title} =   req.params;
res.json({
    id: id,
    titile:title
});
});

app.post('/movie/:id',(req,res)=>{

    
 const {id}=  req.body&&req.params;
 if(id==200){
    res.redirect('/api/movies');
 }

 else{
    res.send({
        status:'error'
    })
 }
});

app.get('/api/movies',(req,res)=>{


res.json({
    name:'Movie Name'

});
});

//Home Page Route
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});

//Circle Route

app.get('/circle', (req, res) => {
    res.sendFile(__dirname+'/circle.html')
});

//Circle  calculator

app.post('/circle', (req, res) => {
    const {radious,height,base} = req.body;
    // res.send(`${Math.PI *2 *radious}`);

    res.json({
   triangle:{ 

    
 triangleArea: .5*height*base
    
   },
      circle:{
        radious:radious,
        cicleArea:`${Math.PI* Math.pow(radious,2)}`
      }
        
    });
});
app.use('*',(req,res)=>{
    res.status(404). json({

    status:'server error'
    })
} )
app.use('/', (req, res) => {
    res.send("<h1>404 error!</h1>")
})




module.exports = { PORT, app }