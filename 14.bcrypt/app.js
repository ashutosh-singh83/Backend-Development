const express = require("express");
const app = express();
const bcrypt=require("bcrypt")

app.get("/",function(req,res){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash("password",salt,function(err,hash){
            console.log(hash)//$2b$10$iug5WvW.4e1GMvADGZ/ybePcLLC2Us734Ip2AMY6RmIWQxwRXnJb6
        });
    });
})

app.get("/compare",function(req,res){
    bcrypt.compare("password","$2b$10$iug5WvW.4e1GMvADGZ/ybePcLLC2Us734Ip2AMY6RmIWQxwRXnJb6",function(err,result){
        console.log(result);
        
    })
})
app.listen(3000);