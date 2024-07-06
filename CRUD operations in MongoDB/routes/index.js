var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/create", async function (req, res) {
  const createdUser = await userModel.create({
    username: "Siya",
    age: 21,
    name: "Siya",
  });
  res.send(createdUser);
});

router.get("/allusers", async function (req, res) {
  const allusers = await userModel.find();
  res.send(allusers);
});
router.get("/oneuser", async function (req, res) {
  let oneuser = await userModel.findOne({ username: "Ashu" });
  console.log(oneuser);
  res.send(oneuser);
});
router.get("/delete", async function (req, res) {
  let deletedUser = await userModel.findOneAndDelete({
    username: "Ashu",
  });
  res.send(deletedUser);
});
module.exports = router;
