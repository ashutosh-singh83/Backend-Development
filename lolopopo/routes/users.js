const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practiceKaro");//making a databse named preacticeKaro
const userSchema=mongoose.Schema({
  usernmae:String,
  name:String,
  age:Number,
});
module.exports=mongoose.model("user",userSchema); 