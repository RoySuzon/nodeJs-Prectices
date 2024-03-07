const express = require('express');

const path = require('path');
const { getProducts } = require('../controllers/products.controller');

productRoute = express.Router();


const urlencodedJson = express.urlencoded({ extended: false })


productRoute.post('/product', urlencodedJson, getProducts);


module.exports = { productRoute };