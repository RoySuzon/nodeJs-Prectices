const express = require("express");
const { router } = require("./routes/users.route");

const app = express();
const PORT = process.env.PORT || 8080;
const hostName = "127.0.0.1";

app.use("/api/user", router);
app.get("/", (req, res) => {
    // res.statusCode=200;
  res.send("I am put request at Home route");
});

app.use("/register", (req, res) => {

    // res.status(200).json({
    //     name: "Goutom",
    //     status:200
//     //   });
res.statusCode=200;



res.sendFile(`${__dirname}/views/index.html`);
// res.cookie("Name",'ROY');

// res.removeListener();
    // res.status(202).json({
    //     name: "Goutom",
    //     status:202
    //   });
      
    //   res.redirect('/api/user/login');


});

app.use((req, res) => {
  res.send("Invailid Url 404! erro");
});

module.exports = { app, PORT, hostName };
