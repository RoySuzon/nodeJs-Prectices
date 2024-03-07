require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const { userModel } = require('./config/mongo.config');
mongoose.connect(process.env.MOGO_LINK);
const app = express();
PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/users', async (req, res) => {
    try {
        const users = await userModel.find(/* { _id: req.params.name } */);
        res.send({
            status: true,
            users
        });
    } catch (error) {
        res.status(404).send({ status: false });
    }
});



app.delete('/register', async (req, res) => {

    try {
        const { id } = req.body;

        const deleteUser = await userModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ status: true, deleteUser });

    } catch (error) {
        res.status(404).send({ status: false, error });
    }
});
app.put('/register/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updateUser = await userModel.findByIdAndUpdate(id, { email, name }, { new: true });
        res.status(200).send({ status: true, updateUser });

    } catch (error) {
        res.status(404).send({ status: false, error });
    }
});
// app.get('/delete', async (req, res) => {

//     try {
//         const { id } = req.body;

//         const deleteUser = await userModel.findByIdAndDelete();
//         res.status(200).send({ status: true, deleteUser });

//     } catch (error) {
//         res.status(404).send({ status: false, error });
//     }
// });
app.post('/register', async (req, res) => {

    try {
        const newUser = await new userModel(req.body).save();
        res.status(200).send({ status: true, newUser });

    } catch (error) {
        res.status(404).send({ status: false, users: error });
    }

});

app.listen(PORT, () => {

    console.log(`http://127.0.0.1:${PORT}`);
});