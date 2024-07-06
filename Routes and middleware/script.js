const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("I am a Middleware and i am working");
  next();
});
app.use(function (req, res, next) {
  console.log("I am a second Middleware and i am working");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello from home page");
});
app.get("/ashu", (req, res) => {
  res.status(200).send("hello from ashu page");
});
//app.listen(3000)
app.listen(3000, () => {
  console.log("app is running at 3000");
});
