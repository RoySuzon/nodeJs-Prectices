const userRouter = require('express').Router();
const { getAllUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');
// const bodyParser = require('body-parser');

// const urlEncoded = bodyParser.urlencoded({ extended: false });

userRouter.get('/users', getAllUser);
userRouter.post('/users', createUser);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users', deleteUser);

module.exports = { userRouter };
