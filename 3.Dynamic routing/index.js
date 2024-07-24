const express = require("express");
const app = express(); //express function is stored in app
app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});
app.get("/profile", (req, res) => {
  res.send("Hello from profile");
});
app.get("/profile/:username", (req, res) => {
  res.send(`Hello from ${req.params.username}`); //browser se req aaya isliye req use kiya
});
app.listen(3000);
