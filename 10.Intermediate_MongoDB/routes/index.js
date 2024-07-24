var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/create", async function (req, res, next) {
  let user = await userModel.create({
    username: "Ashut",
    nickname: "Ashutosh",
    description: "I am a guy of 20 years",
    categories: ["life", "happy", "family"],
  });
  res.send(user);
});
// intermediate mongodb

// How can I perform a case-insensitive search in Mongoose?
router.get("/find", async function (req, res, next) {
  // var regex = new RegExp(search,flags)
  var regex = new RegExp("^aShu$", "i"); //^-for start :: $-for end //if we dont use start and end signs then we will get all users whose name contains "ashu"
  let user = await userModel.find({ username: regex });
  res.send(user);
});

// How do I find documents where an array field contains all of a set of values?
router.get("/categoryfind", async function (req, res, next) {
  let user = await userModel.find({ categories: { $all: ["node", "react"] } });
  res.send(user);
});

// How can I search for documents with a specific date range in Mongoose?
router.get("/datefind", async function (req, res, next) {
  var date1 = new Date("2024-04-23");
  var date2 = new Date("2024-04-24");
  let user = await userModel.find({
    dateCreated: { $gte: date1, $lte: date2 },
  });
  res.send(user);
});

// How can I filter documents based on the existence of a field in Mongoose?
router.get("/existfind", async function (req, res, next) {
  let user = await userModel.find({ categories: { $exists: true } });
  res.send(user);
});

// How can I filter documents based on a specific field's length in Mongoose?
router.get("/lengthfind", async function (req, res, next) {
  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$nickname" }, 8] },
        { $lte: [{ $strLenCP: "$nickname" }, 10] },
      ],
    },
  });
  res.send(user);
});
module.exports = router;
