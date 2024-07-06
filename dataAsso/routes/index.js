var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/createUser", async function (req, res, next) {
  try {
    let createdUser = await userModel.create({
      username: "Ashutosh",
      password: "Ash",
      email: "ash@mail.com",
      fullName: "Ashutosh Singh",
    });
    res.send(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the user.");
  }
});

router.get("/createPost", async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: "Hello",
    user: "8765rdcvnhu",
  });
  res.send(createdPost);
});
module.exports = router;
