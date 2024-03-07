const { users } = require("../models/user.model");

exports.getUser = function (req, res) {

    const { name, age } = req.body;

    if (name == undefined || age == undefined) {
        res.json(users);
    }
    else {
        users.push(
            {
                name: `${name}`,
                age: `${age}`
            })
    }
    res.status(200).send(
        users
    );

}