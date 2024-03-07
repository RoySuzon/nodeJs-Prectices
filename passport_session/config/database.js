require('dotenv').config();
const { default: mongoose } = require("mongoose");
mongoose.connect(process.env.LOCAL_DB).then(() => {
    console.log("DB is Conneceted");
}).catch((error) => {
    console.log(error);
});

