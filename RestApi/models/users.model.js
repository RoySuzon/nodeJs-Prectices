const { v4: uuidv4 } = require('uuid');


const users = [

    {
        id: uuidv4(),
        username: "Goutom Roy",
        email: "goutomroy770@gmail.com",

    },
    {
        id: uuidv4(),
        username: "Sujon Roy",
        email: "roysujon@gmail.com",

    }

]

module.exports = { uuidv4, users }

