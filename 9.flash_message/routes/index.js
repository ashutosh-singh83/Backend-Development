var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});
router.get("/failed", function (req, res) {
  req.flash("age", 21);
  req.flash("name", "ashu");
  res.send("ban gaya");
});
router.get("/checkKaro", function (req, res) {
  console.log(req.flash("age"), req.flash("name"));
  res.send("check karo terminal par");
});

module.exports = router;
