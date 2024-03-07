const express = require("express");
const router = express.Router();

router.put("/", (req, res) => {
  res.send("I am put request at Home route");
});
router.delete("/", (req, res) => {
  res.send("I am delete request at Home route");
});
router.post("/", (req, res) => {
  res.send("I am Post request at Home route");
});
router.get("/register", (req, res) => {
  res.send("I am  Register route");
});
router.get("/login", (req, res) => {
  res.send("I am  Login  route");
});

module.exports ={router};
