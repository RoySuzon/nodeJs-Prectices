const express = require('express');


const router = express.Router();



router.get('/reg',(req,res)=>{
    res.status(200).json({data:{name:'Goutom',
    statusCode : 200}});
});


module.exports = {router}