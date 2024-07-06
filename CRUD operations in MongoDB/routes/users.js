//1.install mongodb
//2.install mongoose JS

//3.require and setup connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/new_DB"); //making a databse named preacticeKaro //DB creation

//4.make schema
const userSchema = mongoose.Schema({
  usernmae: String,
  name: String,
  age: Number,
});
//5.create model and export
module.exports = mongoose.model("user", userSchema); //collection
