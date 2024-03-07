const express = require('express');

const bodyParse = require('body-parser');


const app = express();




const bodyParseUrlencoded = bodyParse.urlencoded({ extended: false });
const bodyParseJson = bodyParse.json();

app.use('/home',express.static('public'));

// app.use('/login',express.static('./public'))

app.post('/', bodyParseUrlencoded, (req, res) => {

    const { id } = req.body;
    res.json({
        status: "OK",
        id: id

    });

})


app.use((req, res) => {
    res.send('ERROR')
});

module.exports = { app }