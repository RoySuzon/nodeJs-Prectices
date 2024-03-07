const express = require('express');

const path = require('path');
const { getUser } = require('../controllers/users.controller');

userRoute = express.Router();

 
const urlencodedJson = express.urlencoded({extended:false})


 userRoute.post('/user', urlencodedJson, getUser);


module.exports = {userRoute};