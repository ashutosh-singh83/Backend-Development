var express = require("express");
var router = express.Router();

/* GET home page. */
//Sessions
router.get("/", function (req, res, next) {
  req.session.ban = true;
  res.render("index", { title: "Express" });
});
router.get("/checkban", function (req, res, next) {
  if (req.session.ban === true) {
    res.send("You are banned");
  } else {
    res.send("not banned");
  }
});
router.get("/removeban", function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      throw err;
    } else {
      res.send("ban removed");
    }
  });
});

//Cookies
router.get("/cookie", function (req, res, next) {
  res.cookie("age", 25);
  res.render("index", { title: "Express" });
});
router.get("/read", function (req, res, next) {
  console.log(req.cookies.age);
  res.send("check ");
});
router.get("/delete", function (req, res, next) {
  res.clearCookie("age");
  res.send("deleted");
});
module.exports = router;
