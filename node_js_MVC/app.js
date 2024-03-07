const express = require('express');
const { userRoute } = require('./routes/users.route');
const { productRoute } = require('./routes/products.route');


// const { router } = require('./routes/users.route');


const app = express();

app.use('/api',userRoute);
app.use('/api',productRoute);

// app.get('/user', (req,res)=>{

//     res.sendFile(__dirname+'/abc.json');
// });


app.use((req,res)=>{
    res.send({status:'Error'});
});


// const jsonPath = String( __dirname+'/abc.json');
module.exports={app} 

