const express = require('express')
const app = express()
app.use(function(req,res,next){
  console.log("hello from middleware");
  next();
})
app.use(function(req,res,next){
  console.log("hello from middleware 2");
  next();
})
app.get('/', function (req, res) {
  res.send('Hello world')
})
app.get('/profile', function (req, res) {
  res.send('Hello from profile')
})
app.get('/profile/:username',function(req,res){
  res.send(`Hello from ${req.params.username}`);
})

app.listen(3000)
//7 t0 9 backend