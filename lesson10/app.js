require('dotenv').config();
const express = require('express');
const { router } = require('./routes/app.route');
const app = express();
const PORT = process.env.PORT || 8080;
app.use('/api/user', router);
app.use((req, res) => {
    res.json({ status: '404! error' });

});
module.exports = { app, PORT };