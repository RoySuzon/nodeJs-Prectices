require("dotenv").config();

const { app, PORT } = require("./app");

const HOSTNAME = '127.0.0.1';

app.listen(PORT, () => {
    console.log(`Sever is running on http://${HOSTNAME}:${PORT}`);
});




