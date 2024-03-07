const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { userRouter } = require('./routes/users.route');
const multer = require('multer');
const { randomInt } = require('crypto');
const { data } = require('./data');


// 





const urlEncoded = bodyParser.urlencoded({ extended: false });
const urljson = bodyParser.json();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const name = randomInt(100000, 999999) + '_' + file.originalname;
        cb(null, name)
    }
})

const upload = multer({ storage: storage });


app.post('/upload', upload.single('img'), (req, res) => {
    res.send('Uploaded this file');
});


app.use(cors());
app.use('/api', urljson, urlEncoded, userRouter);
app.get('/', (req, res) => {

    res.send(data)
    // res.sendFile(path.join(__dirname, 'views/index.html'))
})



app.use((req, res, next) => {
    res.status(404).json({ status: "Route is not found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ status: "Something s wrong" })
})


module.exports = { app }
