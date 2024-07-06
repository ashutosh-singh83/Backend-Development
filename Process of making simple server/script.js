//express js
//install
//express js boilerplate code
//......go to npm
//......search express
//......copy the code
//express js ejs setup
//......install ejs
//......set view engine
//......create view folder
//......create ejs files
//......render ejs files inside routes
//express static files setup
//......create folder named public
//......create three folders inside it named as images, stylesheets , javascripts
//......configure the express static in script.js file
//......understand the path
//architecture of public folder
const exp = require("constants");
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000);
