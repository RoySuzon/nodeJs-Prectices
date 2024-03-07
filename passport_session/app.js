const express = require('express');
const cors = require('cors');
const { User } = require('./models/users.model');
require('dotenv').config();
const app = express();
require('./config/database');
app.use(express.json(), express.urlencoded({ extended: false }), express.static('public'));
app.use(cors());
app.set("view engine", "ejs");
let languageName = [];
app.get('/', (req, res) => {
    res.render('index.ejs', { languageName: languageName });
});
app.get('/contact', (req, res) => {
    res.render('contact.ejs', { languageName: languageName });
});
app.post('/', (req, res) => {
    const pLanguage = req.body.pLanguage;
    languageName.push(pLanguage);
    console.log(pLanguage);
    res.redirect('/');
});

//Register

app.get('/register', (req, res) => {

    res.render('register');

});
app.post('/register', async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) return res.status(404).send('User is already used');
        const newUser = await new User(req.body).save();
        res.status(201).send(newUser);

    } catch (error) {
        res.send(error.message);
    }



});

//Login
app.get('/login', (req, res) => {

    res.render('login');

});


app.get('/users', async (req, res) => {
    try {
        const data = await new User.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

app.post('/register', async (req, res) => {
    try {
        const newUser = await User(req.body).save();

        if (req.body) {

            res.send(newUser);
        }
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = { app }; 