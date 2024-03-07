let { users, uuidv4 } = require("../models/users.model");

const getAllUser = (req, res) => {

    res.json({ users });
}

const createUser = (req, res) => {

    const { username, email } = req.body;
    const newUser = {
        id: uuidv4(),
        username: username,
        email: email
    }
    if (username == undefined || email == undefined) {
        res.status(404).json({ status: "Something is wrong" });
    }



    else {
        users.push(newUser);
        res.status(201).json(users);
    };


}

//UPDATE
const updateUser = (req, res) => {
    const userID = req.params.id;

    const { username, email } = req.body;

    users.filter((user) => user.id === userID).map((selectedUser) => {

        selectedUser.email = email;
        selectedUser.username = username;
    });
    res.status(200).json(users);
};
//DLELTE
const deleteUser = (req, res) => {
    const { userID, email } = req.query;

    users = users.filter((user) => user.id !== userID);

    res.status(200).json(users);
};

module.exports = { getAllUser, createUser, updateUser, deleteUser }