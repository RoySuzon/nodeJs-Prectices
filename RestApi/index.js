require('dotenv').config();

const { app } = require("./app");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server is connected in http://127.0.0.1:${PORT}`);
});